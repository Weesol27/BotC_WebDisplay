class PlayerCountTable {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.isLocked = false;
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
    document.getElementById("lockButton").addEventListener("click", () => this.toggleLock());
  }

  toggleLock() {
    this.isLocked = !this.isLocked;
    document.getElementById("lockButton").textContent = this.isLocked ? "Unlock" : "Lock";
    
    // Disable/Enable + and - buttons
    document.querySelectorAll(".plus-button, .minus-button").forEach(button => {
      button.disabled = this.isLocked;
    });
    
    // Disable/Enable player dropdown
    document.querySelectorAll(".player-count-dropdown").forEach(dropdown => {
      dropdown.disabled = this.isLocked;
    });
  }

  render() {
    this.container.innerHTML = "";
    
    const tableWrapper = document.createElement("div");
    tableWrapper.className = "player-count-table";
    tableWrapper.style.display = "grid";
    tableWrapper.style.gridTemplateColumns = "repeat(5, auto)";
    tableWrapper.style.gap = "5px"; // Reduced spacing
    tableWrapper.style.textAlign = "center";
    
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
    
    const playerSelect = document.createElement("select");
    playerSelect.className = "player-count-dropdown";
    Object.keys(this.data.values).forEach(playerCount => {
      const option = document.createElement("option");
      option.value = playerCount;
      option.textContent = playerCount;
      playerSelect.appendChild(option);
    });
    
    dataRow.appendChild(playerSelect);
    tableWrapper.appendChild(dataRow);
    this.container.appendChild(tableWrapper);
  }
}
