// Назви предметів
const subjects = ["Проєктування ІС", "Бази даних та знань", "Soft Skills", "Англійська мова"];

// Початок пари
const startTimes = ["09:00", "10:30", "12:10", "15:20"];

// Прізвища викладачів
const teachers = ["Федусенко", "Хлевний", "", "Півкач"];

// Тривалість пари, хв
const duration = 80;

// Створення таблиці розкладу
function renderSchedule() {
    const container = document.getElementById("schedule");
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    const th1 = document.createElement("th");
    th1.textContent = "№";
    headerRow.appendChild(th1);

    const th2 = document.createElement("th");
    th2.textContent = "Предмет";
    headerRow.appendChild(th2);

    const th3 = document.createElement("th");
    th3.textContent = "Початок";
    headerRow.appendChild(th3);

    const th4 = document.createElement("th");
    th4.textContent = "Викладач";
    headerRow.appendChild(th4);

    table.appendChild(headerRow);

    // заповнення rows 
    for (let i = 0; i < subjects.length; i++) {
        const row = document.createElement("tr");

        const cell1 = document.createElement("td");
        cell1.textContent = i + 1;
        row.appendChild(cell1);

        const cell2 = document.createElement("td");
        cell2.textContent = subjects[i];
        row.appendChild(cell2);

        const cell3 = document.createElement("td");
        cell3.textContent = startTimes[i];
        row.appendChild(cell3);

        const cell4 = document.createElement("td");
        cell4.textContent = teachers[i] !== "" ? teachers[i] : "Не вказано";
        row.appendChild(cell4);

        table.appendChild(row);
    }

    container.appendChild(table);
}

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

document.addEventListener("DOMContentLoaded", function () {
    renderSchedule();
    document.getElementById("get_lesson_info").addEventListener("click", getLessonInfo);
});