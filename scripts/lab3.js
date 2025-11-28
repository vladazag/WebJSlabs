// Базовий клас тваринa
class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height; // h в метрах
    }

    // Метод: вага тварини в кілограмах
    weight(k) {
        return k * this.height ** 3;
    }
}

// Нащадок кішка 
class Cat extends Animal {
    constructor(name, height, breed) {
        super(name, height);
        this.breed = breed;
        this.k = 15;
    }

    // Вага в г
    weightInGrams() {
        const wKg = this.weight(this.k); // в кг
        return wKg * 1000; // в г
    }
}

// Cтворення кішки 
function createCat() {
    const name = document.getElementById("animal-name").value;
    const height = parseFloat(document.getElementById("animal-height").value);
    const breed = document.getElementById("cat-breed").value;
    const result = document.getElementById("cat-info");

    if (!name || !height || !breed) {
        result.textContent = "Будь ласка, заповніть усі поля";
        return;
    }

    if (!height <= 0) {
        result.textContent = "Висота тварини має бути не менше 1 см (0,01 м)";
        return;
    }

    const cat = new Cat(name, height, breed);
    const weight = cat.weightInGrams();

    result.textContent = "Кішка " + cat.name + ", порода " + cat.breed + ", вага: " + weight.toFixed(2) + "г";
}

// Обробник кліку 
const btn = document.getElementById("create-cat");
btn.addEventListener("click", createCat);