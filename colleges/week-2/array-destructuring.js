const arr = ['first', 'second', 'third'];

const firstItem = arr[0];
const secondItem = arr[1];
const thirdItem = arr[2];

const [fItem, sItem, tItem] = arr;
const [, secondElement, thirdElement] = arr;

const person = {
    firstName: 'Jan',
    lastName: 'Modaal'
}

console.log(Object.entries(person));

for (const arr of Object.entries(person)) {
    const key = arr[0];
    const value = arr[1];
    console.log(arr, key, value);
}
for (const [key, value] of Object.entries(person)) {
    console.log(arr, key, value);
}

const colors = ['red', 'green', 'blue', undefined];
const [pizza, firstColor, thirdColor, fourthColor = 'purple'] = colors;
console.log(pizza, thirdColor, fourthColor);