// Всі кнопки
const buttons = document.querySelectorAll(".close-btn");

// Обробники кліків
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const block = this.parentElement;
        block.style.display = "none";
    });
});

// Відкриття всіх блоків
const openButton = document.querySelector(".open-btn");

openButton.addEventListener("click", function () {
    const blocks = document.querySelectorAll(".close-block");
    blocks.forEach(function (block) {
        block.style.display = "block";
    });
});
