// Ф-ція перемикання активності комірки
function toggleCell() {
    this.classList.toggle("active");
}

// Ф-ція суми комірок
function calculateSum() {
    let sum = 0;
    const activeCells = document.querySelectorAll(".num-table td.active");

    activeCells.forEach(function (cell) {
        sum += parseInt(cell.textContent);
    });

    result.textContent = "Сума активних комірок: " + sum + ".";
}

// Ф-ція скидання
function resetCells() {
    cells.forEach(function (cell) {
        cell.classList.remove("active");
    });

    result.textContent = "";
}

// Комірки таблиці
const cells = document.querySelectorAll(".num-table td");

// Обробник кліків комірок
cells.forEach(function (cell) {
    cell.addEventListener("click", toggleCell);
});

// Кнопка суми
const sumBtn = document.getElementById("sum-btn");
const result = document.getElementById("sum-result");

sumBtn.addEventListener("click", calculateSum);

// Кнопка скидання
const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", resetCells);
