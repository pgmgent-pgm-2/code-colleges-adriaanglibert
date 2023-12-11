const pi = Math.PI;

function calculateCircleArea(radius) {
    return radius * radius * pi;
}

function calculateRectangleArea(length, width) {
    return length * width;
}

function sum(...args) {
    return args.reduce((total, value) => total + value);
}

exports.minus = function (a, b) {
    return a - b;
}

module.exports = {
    calculateCircleArea,
    calculateRectangleArea,
    sum
}