// Базовий клас тваринa
class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height; // h в метрах
    }

    // Метод: вага тварини в кг
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

    if (height <= 0) {
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

// Нащадок собака
class Dog extends Animal {
    constructor(name, height, breed, guardObject) {
        super(name, height);
        this.breed = breed;
        this.guardObject = guardObject;
        this.k = 25;
    }

    weightInGrams() {
        const wKg = this.weight(this.k);
        return wKg * 1000;
    }

    // Метод охороняти
    guard() {
        return `Собака ${this.name} охороняє ${this.guardObject}.`;
    }
}

// Створення собаки
function createDog() {
    const name = document.getElementById("dog-name").value;
    const height = parseFloat(document.getElementById("dog-height").value);
    const breed = document.getElementById("dog-breed").value;
    const guardObject = document.getElementById("dog-guard").value;
    const result = document.getElementById("dog-info");

    if (!name || !height || !breed || !guardObject) {
        result.textContent = "Будь ласка, заповніть усі поля";
        return;
    }

    if (height <= 0) {
        result.textContent = "Висота тварини має бути не менше 1 см (0,01 м)";
        return;
    }

    const dog = new Dog(name, height, breed, guardObject);
    const weight = dog.weightInGrams();

    result.textContent = "Собака " + dog.name + ", порода " + dog.breed + ", вага: " + weight.toFixed(2) + "г. " + dog.guard();
}

// Обробник кліку
document.getElementById("create-dog").addEventListener("click", createDog);