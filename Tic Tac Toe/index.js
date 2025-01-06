let first = "X";

let cells = document.querySelectorAll("td");
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", changeValue);
}

function changeValue() {
    if (this.innerText === "") {
        this.innerText = first;
        checkWin(this);
        first === "X" ? (first = "O") : (first = "X");
    }
}

function checkWin(cell) {
    const row = Math.floor(cell.id / 10);
    const col = Math.floor(cell.id % 10);

    //row
    if (
        document.getElementById(row + "0").innerText ===
            document.getElementById(row + "1").innerText &&
        document.getElementById(row + "1").innerText ===
            document.getElementById(row + "2").innerText
    ) {
        won();
    }

    //Columns
    if (
        document.getElementById("0" + col).innerText ===
            document.getElementById("1" + col).innerText &&
        document.getElementById("1" + col).innerText ===
            document.getElementById("2" + col).innerText
    ) {
        won();
    }

    //Primary Diagonal
    if (
        document.getElementById("00").innerText !== "" &&
        document.getElementById("00").innerText ===
            document.getElementById("11").innerText &&
        document.getElementById("11").innerText ===
            document.getElementById("22").innerText
    ) {
        won();
    }

    //Secondary Diagonal
    if (
        document.getElementById("02").innerText !== "" &&
        document.getElementById("02").innerText ===
            document.getElementById("11").innerText &&
        document.getElementById("11").innerText ===
            document.getElementById("20").innerText
    ) {
        won();
    }
}

function won() {
    setTimeout(() => {
        alert(first === "X" ? "O" : "X" + " has won!");
        window.location.reload();
    }, 100);
}
