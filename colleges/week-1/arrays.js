const arr = new Array();
const array = Array();
const preferedArray = [];

const fruits = ["Appel", "Banaan", "Peer"];
fruits[0]; // Appel
fruits[2]; // Peer

fruits[1] = "Pruim"
console.log(fruits);
fruits[3] = "Mango"
console.log(fruits);

const mixedArray = [
    3,
    true,
    { name: 'John' },
    function () {
        console.log('Functie in array');
    }
]

mixedArray[3]();

fruits[20] = "Dadel";

console.log(fruits)
console.log(fruits.length)

fruits.length = 2;
console.log(fruits)
fruits.length = 21;
console.log(fruits)
fruits.length = 0;
console.log(fruits)



const firstString = "Mercedes";
const secondString = "Mercedes";


const firstArray = ["Ferrari", "McLaren"];
const secondArray = ["Ferrari", "McLaren"];
const thirdArray = ["Ferrari", "Mercedes"];

console.log(firstString == secondString);
console.log(firstArray == secondArray);

function checkArrayEqual(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    for (let i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            return false;
        }
    }

    return true;
}

console.log(`Zijn arrays gelijk? ${checkArrayEqual(firstArray, secondArray)}`);



console.log(JSON.stringify(firstArray));

function areEqual(fArr, sArr) {
    // return JSON.stringify(fArr) === JSON.stringify(sArr);

    if (JSON.stringify(fArr) === JSON.stringify(sArr)) {
        return true;
    } else {
        return false;
    }
}

console.log(areEqual(firstArray, secondArray));

const isEqualShort = (firstArr, secondArr) => JSON.stringify(firstArr) === JSON.stringify(secondArr);

console.log(isEqualShort(firstArray, secondArray));

const matrix = [
    [0, 1, 2],
    [6, 7, 8]
    [9, 9, 1]
]

matrix[1][1]; // 7