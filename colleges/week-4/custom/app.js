const { greetings, goodbye } = require('./helpers');
const { sum } = require('./mathematics');
const mathematics = require('./mathematics');

greetings('Jan');

goodbye('Mieke');

console.log(sum(2, 3, 5), mathematics.calculateRectangleArea(2, 5));