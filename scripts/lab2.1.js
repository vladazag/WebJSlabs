document.addEventListener("DOMContentLoaded", function () {
    // кнопки закриття
    const buttons = document.querySelectorAll(".close-btn");

    function isVisible(el) {
        return getComputedStyle(el).display !== "none";
    }

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const block = this.parentElement;

            const innerBlocks = block.querySelectorAll(".close-block");

            let hasOpenInner = false;
            innerBlocks.forEach(function (b) {
                if (isVisible(b)) {
                    hasOpenInner = true;
                }
            });

            if (hasOpenInner) {
                return;
            }

            block.style.display = "none";
        });
    });

    // кнопка відкриття блоків
    const openButton = document.querySelector(".open-btn");
    openButton.addEventListener("click", () => {
        document.querySelectorAll(".close-block")
            .forEach(block => block.style.display = "block");
    });
});
