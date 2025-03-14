class PlayerCountTable {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.selectedColumn = null;
    this.data = {
      headers: ["Players", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15+"],
      rows: [
        { name: "Townsfolk", values: ["3", "3", "5", "5", "5", "7", "7", "7", "9", "9", "9"] },
        { name: "Outsiders", values: ["0", "1", "0", "1", "2", "0", "1", "2", "0", "1", "2"] },
        { name: "Minions", values: ["1", "1", "1", "1", "1", "2", "2", "2", "3", "3", "3"] }
      ]
    };
  }

  render() {
    const table = document.createElement("table");
    table.className = "player-count-table";
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    const thPlayers = document.createElement("th");
    thPlayers.textContent = this.data.headers[0];
    headerRow.appendChild(thPlayers);

    for (let i = 1; i < this.data.headers.length; i++) {
      const th = document.createElement("th");
      th.setAttribute("data-col", this.data.headers[i]);
      th.textContent = this.data.headers[i];
      th.addEventListener("click", () => this.selectColumn(this.data.headers[i]));
      headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    this.data.rows.forEach(rowData => {
      const tr = document.createElement("tr");
      const th = document.createElement("th");
      th.textContent = rowData.name;
      tr.appendChild(th);
      rowData.values.forEach((value, index) => {
        const td = document.createElement("td");
        td.setAttribute("data-col", this.data.headers[index + 1]);
        td.textContent = value;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);

    this.container.innerHTML = "";
    this.container.appendChild(table);
  }

  selectColumn(col) {
    this.selectedColumn = col;
    this.updateActiveColumn();
  }

  updateActiveColumn() {
    const headers = this.container.querySelectorAll("thead th[data-col]");
    headers.forEach(th => {
      th.classList.toggle("active", th.getAttribute("data-col") === this.selectedColumn);
    });
    const cells = this.container.querySelectorAll("tbody td");
    cells.forEach(td => {
      td.classList.toggle("active", td.getAttribute("data-col") === this.selectedColumn);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const pct = new PlayerCountTable("playerCountTableContainer");
  pct.render();
  window.pctInstance = pct;
});
