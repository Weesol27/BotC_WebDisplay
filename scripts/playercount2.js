class PlayerCountTable {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.isLocked = false;
        this.currentPlayerCount = "5"; // Default to 5 players

        this.data = {
            headers: ["Players", "Townsfolk", "Outsiders", "Minions", "Demons"],
            values: {
                "5": ["3", "0", "1", "1"],
                "6": ["3", "1", "1", "1"],
                "7": ["5", "0", "1", "1"],
                "8": ["5", "1", "1", "1"],
                "9": ["5", "2", "1", "1"],
                "10": ["7", "0", "2", "1"],
                "11": ["7", "1", "2", "1"],
                "12": ["7", "2", "2", "1"],
                "13": ["9", "0", "3", "1"],
                "14": ["9", "1", "3", "1"],
                "15+": ["9", "2", "3", "1"]
            }
        };

        this.render();
    }

toggleLock() {
    this.isLocked = !this.isLocked;
    document.getElementById("lockButton").textContent = this.isLocked ? "Unlock" : "Lock";

    // ✅ Disable/Enable buttons and textboxes
    document.querySelectorAll(".plus-button, .minus-button, .shuffle-button, .player-textbox").forEach(element => {
        element.disabled = this.isLocked;
    });

    // ✅ Disable/Enable player dropdown
    if (this.playerSelect) {
        this.playerSelect.disabled = this.isLocked;
    }

    // ✅ Disable/Enable life marker image clicks
    document.querySelectorAll(".player-status").forEach(img => {
        img.style.pointerEvents = this.isLocked ? "none" : "auto";
    });

    console.log(`Lock state changed: ${this.isLocked ? "Locked" : "Unlocked"}`);
}


    updateValues(selectedValue, dataCells) {
        const values = this.data.values[selectedValue];
        if (!values) {
            console.warn("No values found for player count:", selectedValue);
            return;
        }

        console.log("Updating values for Player Count:", selectedValue);

        dataCells.forEach((cell, index) => {
            if (index === 0) return; // Skip first cell (dropdown)
            cell.textContent = values[index - 1] || "";
        });

        // ✅ Notify LifeMarkers about the player count change
        if (window.lm && typeof window.lm.updateMarkers === "function") {
            console.log("Updating LifeMarkers for player count:", selectedValue);
            window.lm.updateMarkers(parseInt(selectedValue === "15+" ? 15 : selectedValue, 10));
        }
    }

    incrementPlayerCount() {
        if (!this.playerSelect || !document.body.contains(this.playerSelect)) {
            console.error("Dropdown not found! Recreating...");
            this.render();
            return;
        }

        let options = Object.keys(this.data.values);
        let currentIndex = options.indexOf(this.playerSelect.value);

        if (currentIndex < options.length - 1) {
            let newValue = options[currentIndex + 1];
            console.log(`Incrementing Player Count to: ${newValue}`);

            this.currentPlayerCount = newValue;
            this.playerSelect.value = newValue;

            // ✅ Update table values
            this.updateValues(newValue, this.container.querySelectorAll(".player-count-cell"));
        } else {
            console.log("Maximum player count reached.");
        }
    }

decrementPlayerCount(numRemoved = 1) {
    if (!this.playerSelect || !document.body.contains(this.playerSelect)) {
        console.error("Dropdown not found! Recreating...");
        this.render();
        return;
    }

    let options = Object.keys(this.data.values);
    let currentIndex = options.indexOf(this.playerSelect.value);

    let newIndex = currentIndex - numRemoved;
    if (newIndex < 0) newIndex = 0;

    let newValue = options[newIndex];

    console.log(`Decreasing Player Count by ${numRemoved}, New Count: ${newValue}`);

    this.currentPlayerCount = newValue;
    this.playerSelect.value = newValue;

    setTimeout(() => {
        this.updateValues(newValue, this.container.querySelectorAll(".player-count-cell"));
    }, 10);

    // ✅ Notify LifeMarkers
    if (window.lm && typeof window.lm.updateMarkers === "function") {
        window.lm.updateMarkers(parseInt(newValue === "15+" ? 15 : newValue, 10));
    }
}



    render() {
        this.container.innerHTML = "";
		const outerWrapper = document.createElement("div");
		outerWrapper.style.display = "flex";
		outerWrapper.style.justifyContent = "center"; // Centers horizontally
		outerWrapper.style.alignItems = "center"; // Centers vertically (optional)
		outerWrapper.style.width = "100%"; // Ensures it spans the full width of the container
		outerWrapper.style.marginTop = "20px"; // Optional: Adds some space above
		
        const tableWrapper = document.createElement("div");
        tableWrapper.className = "player-count-table";
        tableWrapper.style.display = "grid";
        tableWrapper.style.gridTemplateColumns = "max-content max-content max-content max-content max-content";
        tableWrapper.style.gap = "5px";
        tableWrapper.style.textAlign = "center";
		tableWrapper.style.margin = "0 auto"; // Centers the table horizontally
		tableWrapper.style.fontSize = "1.5rem"; // Adjust size as needed
		tableWrapper.style.fontWeight = "bold"; // Optional: Makes text bolder for readability


        const colors = ["white", "cyan", "#7EC8E3", "orange", "red"];

        this.data.headers.forEach((header, index) => {
            const headerCell = document.createElement("div");
            headerCell.className = "player-count-header";
            headerCell.textContent = header;
            headerCell.style.color = colors[index];
            tableWrapper.appendChild(headerCell);
        });

        const dataRow = document.createElement("div");
        dataRow.className = "player-count-row";
        dataRow.style.display = "contents";

        if (!this.playerSelect || !document.body.contains(this.playerSelect)) {
            this.playerSelect = document.createElement("select");
            this.playerSelect.className = "player-count-dropdown";
            this.playerSelect.disabled = this.isLocked;

            Object.keys(this.data.values).forEach(playerCount => {
                const option = document.createElement("option");
                option.value = playerCount;
                option.textContent = playerCount;
                this.playerSelect.appendChild(option);
            });

            this.playerSelect.addEventListener("change", () => {
                this.currentPlayerCount = this.playerSelect.value;
                this.updateValues(this.currentPlayerCount, this.container.querySelectorAll(".player-count-cell"));
            });
        }

        if (!this.currentPlayerCount) {
            this.currentPlayerCount = "5";
        }
		this.playerSelect.style.fontSize = "1.5rem"; // Increase dropdown font size
		this.playerSelect.style.padding = "5px"; // Optional: Adds spacing for better appearance

        this.playerSelect.value = this.currentPlayerCount;

        const playerCell = document.createElement("div");
        playerCell.className = "player-count-cell";
        playerCell.appendChild(this.playerSelect);
        dataRow.appendChild(playerCell);

        const dataCells = [playerCell];

        for (let i = 1; i < this.data.headers.length; i++) {
            const dataCell = document.createElement("div");
            dataCell.className = "player-count-cell";
            dataCell.style.color = colors[i];
            dataCells.push(dataCell);
            dataRow.appendChild(dataCell);
        }
		
        tableWrapper.appendChild(dataRow);
		outerWrapper.appendChild(tableWrapper);
        this.container.appendChild(outerWrapper);
		
        console.log("dataCells length after render:", dataCells.length);

        setTimeout(() => {
            this.updateValues(this.currentPlayerCount, dataCells);
        }, 10);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.pctInstance = new PlayerCountTable("playerCountTableContainer");
});
