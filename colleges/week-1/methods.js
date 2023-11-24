const fruits = ["Appel", "Peer", "Mango"];

fruits.push("Banaan");
console.log(fruits);
fruits.pop();
console.log(fruits);

fruits.unshift("Dadel");
console.log(fruits);
const laatsteFruit = fruits.pop();

fruits.shift();

console.log(fruits);
fruits.push('Kiwi', 'Aardbei', 'Ananas');
fruits[1]
console.log(fruits.at(-2));

const newFruits = fruits.map(function (fruit, i) {
    return {
        index: i,
        name: fruit
    };
});

console.log(newFruits);

const prices = [7, 8, 10];
const doublePrices = prices.map(price => {
    return price * 2;
});
const salesPrices = prices.map(price => price * .8);

console.log(prices);

const arr = ["Jan", "Piet", "Joris", "Jan"];
console.log(arr.join(' en '));

const peopleNamedJan = arr.filter(name => {
    return name === "Jan";
});

console.log(salesPrices)

const filterPrices = salesPrices.filter(price => {
    return price <= 5;
})

console.log(filterPrices);

const isEverythingExpensive = salesPrices.every(price => {
    return price > 5;
})

console.log(`Is alles duurder dan 5 euro? ${isEverythingExpensive}`);

const areSomeItemsExpensive = salesPrices.some(price => {
    return price > 5;
})

const isAppleAvailable = fruits.some(fruit => fruit === 'Appel');
console.log('Is er een appel?', isAppleAvailable);

function checkAvailibility(products, product) {
    const isInArray = products.some(item => item === product);
    console.log(`In de array zit er ${isInArray ? 'een' : 'geen'} ${product}`);
}

checkAvailibility(fruits, 'Appel');
checkAvailibility(fruits, 'Peer');
checkAvailibility(fruits, 'Mango');
checkAvailibility(arr, 'Piet');

const multiArray = [
    'Jan',
    [
        'Piet',
        'Joris',
        [
            'Elke',
            'Sofie'
        ]
    ]
];

const flattenedArr = multiArray.flat(2);
console.log(flattenedArr);