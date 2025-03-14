function displayList(containerId, list) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    list.forEach((item, index) => {
        const row = document.createElement("tr");
        row.className = `list-item ${index % 2 === 0 ? 'even' : 'odd'}`;
        row.style.opacity = "0.5"; // Default faded out
        
        const checkboxCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "row-checkbox";
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                row.style.opacity = "1";
            } else {
                row.style.opacity = "0.5";
            }
        });
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);
        
        const nameCell = document.createElement("td");
        nameCell.className = "name";
        nameCell.textContent = item.name;
        
        const textCell = document.createElement("td");
        textCell.className = "text";
        textCell.textContent = item.text;
        
        row.appendChild(nameCell);
        row.appendChild(textCell);
        container.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    if (typeof fablesList !== "undefined") {
        displayList("fablesList", fablesList);
    }
    if (typeof travellersList !== "undefined") {
        displayList("travellersList", travellersList);
    }
    
    const pct = new PlayerCountTable("playerCountTableContainer");
    pct.render();
    window.pctInstance = pct;
    
    const lm = new LifeMarkers("lifeMarkers");
    lm.updateMarkers(15);
});
