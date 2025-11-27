// Назви предметів
const subjects = ["Проєктування ІС", "Бази даних та знань", "Soft Skills", "Англійська мова"];

// Початок пари
const startTimes = ["09:00", "10:30", "12:10", "13:40"];

// Прізвища викладачів
const teachers = ["Федусенко", "Хлевний", "", "Півкач"];

// Тривалість пари, хв
const duration = 80;

// Переведення у хв
function toMinutes(time) {
    const parts = time.split(":");
    return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

// Визначення пари
function getLessonInfo() {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    let message = "";
    let found = false;

    // Перевірка пар
    for (let i = 0; i < startTimes.length; i++) {
        const start = toMinutes(startTimes[i]);
        const end = start + duration;

        // Якщо зараз йде ця пара
        if (currentMinutes >= start && currentMinutes < end) {
            message = "Зараз " + (i + 1) + "-а пара: " + subjects[i] + ". ";

            // Інфо про викладача
            if (teachers[i] !== "") {
                message += "Викладач: " + teachers[i] + ".";
            } else {
                message += "Викладач не вказаний.";
            }

            found = true;
            break;
        }

        // Перевірка на перерву
        if (currentMinutes >= end && i + 1 < startTimes.length) {
            const nextStart = toMinutes(startTimes[i + 1]);
            if (currentMinutes < nextStart) {
                message = "Перерва після " + (i + 1) + "-ї пари.";
                found = true;
                break;
            }
        }
    }

    // Не знайдена пара
    if (found === false) {
        const firstStart = toMinutes(startTimes[0]);
        const lastEnd = toMinutes(startTimes[startTimes.length - 1]) + duration;

        if (currentMinutes < firstStart) {
            message = "Пари ще не почалися.";
        } else if (currentMinutes >= lastEnd) {
            message = "Пари закінчилися.";
        }
    }

    // Виведення результату
    const output = document.querySelector(".result p");
    output.textContent = message;
}

// Обробник кліка
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("get_lesson_info");
    btn.addEventListener("click", getLessonInfo);
});
