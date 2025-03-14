class LifeMarkers {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.players = [];
        this.isLocked = false;
        this.imageStates = { 
            normal: "assets/alive.png", 
            traveller: "assets/traveller.png", 
            dead_vote: "assets/dead_vote.png", 
            dead_no: "assets/dead_no.png" 
        };
    }


    updateMarkers(playerCount) {
        console.log("Updating LifeMarkers for player count:", playerCount);

        if (this.players.length < playerCount) {
            for (let i = this.players.length; i < playerCount; i++) {
                this.players.push({ name: `Player ${i + 1}`, isTraveller: false });
            }
        } else if (this.players.length > playerCount) {
            this.players = this.players.slice(0, playerCount);
        }

        this.renderMarkers();
    }

renderMarkers() {
    this.container.innerHTML = "";

    const wrapper = document.createElement("div");
    wrapper.className = "lifemarkers-wrapper";
    wrapper.style.display = "grid";
    wrapper.style.gridTemplateColumns = `repeat(${this.players.length + 4}, 1fr)`;
    wrapper.style.alignItems = "center";
    wrapper.style.width = "100%";

    const minusButton = document.createElement("button");
    minusButton.textContent = "-";
    minusButton.className = "adjust-button";
    minusButton.addEventListener("click", () => {
        if (window.lm && typeof window.lm.showRemovePlayerModal === "function") {
            window.lm.showRemovePlayerModal((numRemoved) => {
                if (window.pctInstance && typeof window.pctInstance.decrementPlayerCount === "function") {
                    window.pctInstance.decrementPlayerCount(numRemoved);
                }
            });
        }
    });
    wrapper.appendChild(minusButton);

    const shuffleLeft = document.createElement("button");
    shuffleLeft.textContent = "Shuffle";
    shuffleLeft.className = "shuffle-button";
    shuffleLeft.addEventListener("click", () => this.shuffleNames());
    wrapper.appendChild(shuffleLeft);

    this.players.forEach((player, index) => {
        const playerDiv = document.createElement("div");
        playerDiv.className = "player-container";
        playerDiv.style.display = "flex";
        playerDiv.style.flexDirection = "column";
        playerDiv.style.alignItems = "center";

        // ✅ Player Image
        const img = document.createElement("img");
        img.src = player.isTraveller ? this.imageStates.traveller : this.imageStates.normal;
        img.className = "player-status-img";
        img.dataset.traveller = player.isTraveller ? "true" : "false";
        img.style.width = "75px";
        img.style.height = "75px";

        // ✅ Click event to cycle images
        img.addEventListener("click", () => this.cyclePlayerState(player, img));

        // ✅ Player Name Input
        const nameInput = document.createElement("input");
        nameInput.className = "player-textbox";
        nameInput.type = "text";
        nameInput.value = player.name;
        nameInput.style.textAlign = "center";
        nameInput.style.width = "100px";
		nameInput.style.fontSize = "1.5rem";  // Increase font size
		nameInput.style.padding = "5px";      // Add spacing for better appearance
		nameInput.style.height = "40px";      // Increase height to match the font size


        playerDiv.appendChild(img);
        playerDiv.appendChild(nameInput);
        wrapper.appendChild(playerDiv);
    });

    const shuffleRight = document.createElement("button");
    shuffleRight.textContent = "Shuffle";
    shuffleRight.className = "shuffle-button";
    shuffleRight.addEventListener("click", () => this.shuffleNames());
    wrapper.appendChild(shuffleRight);

    const plusButton = document.createElement("button");
    plusButton.textContent = "+";
    plusButton.className = "adjust-button";
    plusButton.addEventListener("click", () => this.showAddPlayerModal());
    wrapper.appendChild(plusButton);

    this.container.appendChild(wrapper);
}

showRemovePlayerModal(confirmCallback) {
    let overlay = document.createElement("div");
    overlay.id = "modal-frame";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0, 0, 0, 0.7)";
    overlay.style.zIndex = "9999";
    overlay.style.pointerEvents = "auto";
    document.body.appendChild(overlay);

    let modal = document.createElement("div");
    modal.id = "removePlayerModal";
    modal.className = "modal";
    modal.style.position = "fixed";
    modal.style.top = "50%";
    modal.style.left = "50%";
    modal.style.transform = "translate(-50%, -50%)";
    modal.style.background = "rgba(0, 0, 0, 0.9)";
    modal.style.padding = "20px";
    modal.style.border = "2px solid white";
    modal.style.zIndex = "10000";
    modal.style.color = "white";

    const message = document.createElement("h3");
    message.textContent = "Select players to remove:";
    modal.appendChild(message);

    const playerList = document.createElement("div");
    playerList.style.display = "flex";
    playerList.style.flexDirection = "column";
    playerList.style.gap = "5px";

    let checkboxes = [];
    this.players.forEach((player, index) => {
        const label = document.createElement("label");
        label.style.display = "block";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = index;
        checkbox.style.marginRight = "5px";

        checkboxes.push({ checkbox, isTraveller: player.isTraveller });
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(player.name));
        playerList.appendChild(label);
    });

    modal.appendChild(playerList);

    const buttonContainer = document.createElement("div");
    buttonContainer.style.display = "flex";
    buttonContainer.style.gap = "10px";

    const confirmButton = document.createElement("button");
    confirmButton.textContent = "Remove Selected";
    confirmButton.addEventListener("click", () => {
        const selectedPlayers = checkboxes.filter(cb => cb.checkbox.checked);
        const selectedNonTravellers = selectedPlayers.filter(cb => !cb.isTraveller);

        if (selectedPlayers.length === 0) {
            alert("Please select at least one player to remove.");
            return;
        }

        // ✅ Remove selected players from list
        this.players = this.players.filter((_, index) => !selectedPlayers.some(cb => parseInt(cb.checkbox.value, 10) === index));
        this.renderMarkers();
        document.body.removeChild(modal);
        document.body.removeChild(overlay);

        // ✅ Only decrement player count if non-travellers were removed
        if (selectedNonTravellers.length > 0 && window.pctInstance && typeof window.pctInstance.decrementPlayerCount === "function") {
            console.log(`Confirmed: Removing ${selectedNonTravellers.length} non-travellers.`);
            window.pctInstance.decrementPlayerCount(selectedNonTravellers.length);
        }

        if (typeof confirmCallback === "function") {
            confirmCallback(selectedNonTravellers.length);
        }
    });

    const cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        document.body.removeChild(modal);
        document.body.removeChild(overlay);
    });

    buttonContainer.appendChild(confirmButton);
    buttonContainer.appendChild(cancelButton);
    modal.appendChild(buttonContainer);

    document.body.appendChild(modal);
}
cyclePlayerState(player, img) {
    if (player.isTraveller) {
        // ✅ Cycle for travellers: "traveller.png" → "dead_no.png" → "traveller.png"
        if (img.src.includes(this.imageStates.traveller)) {
            img.src = this.imageStates.dead_no;
        } else {
            img.src = this.imageStates.traveller;
        }
    } else {
        // ✅ Cycle for normal players: "alive.png" → "dead_vote.png" → "dead_no.png" → "alive.png"
        if (img.src.includes(this.imageStates.normal)) {
            img.src = this.imageStates.dead_vote;
        } else if (img.src.includes(this.imageStates.dead_vote)) {
            img.src = this.imageStates.dead_no;
        } else {
            img.src = this.imageStates.normal;
        }
    }
}
shuffleNames() {
    if (this.players.length <= 1) return; // No need to shuffle if 1 or 0 players

    console.log("Shuffling player names...");
    for (let i = this.players.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.players[i], this.players[j]] = [this.players[j], this.players[i]];
    }

    this.renderMarkers(); // Re-render the UI with shuffled names
}


    showAddPlayerModal() {
        // ✅ Create overlay to prevent button interactions
        let overlay = document.createElement("div");
        overlay.id = "modal-frame";
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0, 0, 0, 0.7)";
        overlay.style.zIndex = "9999";
        overlay.style.pointerEvents = "auto";
        document.body.appendChild(overlay);

        let modal = document.createElement("div");
        modal.id = "addPlayerModal";
        modal.className = "modal";
        modal.style.position = "fixed";
        modal.style.top = "50%";
        modal.style.left = "50%";
        modal.style.transform = "translate(-50%, -50%)";
        modal.style.background = "rgba(0, 0, 0, 0.9)";
        modal.style.padding = "20px";
        modal.style.border = "2px solid white";
        modal.style.zIndex = "10000";
        modal.style.color = "white";

        const message = document.createElement("h3");
        message.textContent = "Enter new player details:";
        modal.appendChild(message);

        const nameInput = document.createElement("input");
        nameInput.type = "text";
        nameInput.placeholder = "Player Name";
        nameInput.style.marginBottom = "10px";
        nameInput.style.display = "block";
        modal.appendChild(nameInput);

        const travelerLabel = document.createElement("label");
        travelerLabel.style.display = "block";

        const travelerCheckbox = document.createElement("input");
        travelerCheckbox.type = "checkbox";
        travelerLabel.appendChild(travelerCheckbox);
        travelerLabel.appendChild(document.createTextNode(" Traveler?"));
        modal.appendChild(travelerLabel);

        const buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        buttonContainer.style.gap = "10px";
        buttonContainer.style.marginTop = "10px";

        const confirmButton = document.createElement("button");
        confirmButton.textContent = "Add Player";
        confirmButton.addEventListener("click", () => {
            const playerName = nameInput.value.trim() || `Player ${this.players.length + 1}`;
            const isTraveler = travelerCheckbox.checked;

            this.players.push({ name: playerName, isTraveller: isTraveler });

            document.body.removeChild(modal);
            document.body.removeChild(overlay);
            this.renderMarkers();

            if (window.pctInstance && typeof window.pctInstance.incrementPlayerCount === "function") {
                window.pctInstance.incrementPlayerCount();
            }
        });

        const cancelButton = document.createElement("button");
        cancelButton.textContent = "Cancel";
        cancelButton.addEventListener("click", () => {
            document.body.removeChild(modal);
            document.body.removeChild(overlay);
        });

        buttonContainer.appendChild(confirmButton);
        buttonContainer.appendChild(cancelButton);
        modal.appendChild(buttonContainer);

        document.body.appendChild(modal);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.lm = new LifeMarkers("lifeMarkers");
});
