function sum(a = 0, b = 0) {
    if (a === undefined || b === undefined) {
        return;
    }

    return a + b;
}

// Vermenigvuldig
function multiply(a = 0, b = 0) {
    return a * b;
}

// Deelfunctie
function division(a = 0, b = 0) {
    return a / b;
}

function doCalculation(a, b, calculation) {
    return calculation(a, b);
}

console.log(doCalculation(2, 3, multiply));
console.log(doCalculation(2, 3, sum));
console.log(doCalculation(2, 3, division));

console.log(sum(2, 3));
console.log(sum(0, 0));
console.log(sum());
console.log(sum(8, 2));

const stock = 10;
const displayItems = 5;

console.log(sum(stock, displayItems));

const itemCount = [10, 5];
console.log(sum(itemCount[0], itemCount[1]));

const inventory = {
    stockCount: 10,
    displayItemCount: 5
};

console.log(sum(inventory.stockCount, inventory.displayItemCount));

function sayIfHot(isHot = true) {
    if (isHot) {
        console.log('Het is warm');
    } else {
        console.log('Het is koud');
    }
}

sayIfHot(true);


// const button = window?.getElementById('button');

// function handleClickEvent() {
//     console.log('Clicked on a button');
// }

// button?.addEventListener('click', handleClickEvent);
// button?.addEventListener('click', function () {
//     console.log('Clicked!');
// });
// button?.addEventListener('click', () => {
//     console.log('Clicked!');
// });

function sumOfMany(...arguments) {
    const argList = Array.from(arguments)
    console.log(argList);
}

sumOfMany(1, 2, 3, 4, 5)