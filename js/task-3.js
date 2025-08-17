class StringBuilder {
  #value; // Приватна властивість

  constructor(initialValue) {
    this.#value = initialValue; // Ініціалізація приватної властивості
  }

  getValue() {
    return this.#value; // Повертає значення приватної властивості
  }

  padEnd(str) {
    this.#value += str; // Додає рядок в кінець
  }
   padStart(str) {
    this.#value = str + this.#value; // Додає рядок на початок
  }

  padBoth(str) {
    this.#value = str + this.#value + str; // Додає рядок на початок і в кінець
  }
}

// Код для перевірки коректності роботи
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
