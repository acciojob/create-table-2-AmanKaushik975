function createTable() {
    const rowCount = parseInt(prompt("Input number of rows"));
    const colCount = parseInt(prompt("Input number of columns"));

    if (isNaN(rowCount) || isNaN(colCount)) {
        alert("Please enter valid numbers for rows and columns.");
        return;
    }

    const table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = "";

    for (let i = 0; i < rowCount; i++) {
        const row = table.insertRow();
        for (let j = 0; j < colCount; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}