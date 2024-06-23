function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
}

function random(min = 0, max = 1) {
    return Math.random() * (max - min) + min;
}

function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    random,
    clamp
};