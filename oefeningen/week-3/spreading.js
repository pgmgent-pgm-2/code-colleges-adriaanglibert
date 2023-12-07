// Oefening 1
const originalArray = [1, 2, 3];

function copyArray(arr) {
    return [...arr];
}

const copiedArray = copyArray(originalArray);
console.log(copiedArray); // Output: [1, 2, 3]

// Oefening 2

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Oefening 3

const originalObject = { name: "Alice" };

function addProperty(originalObj, key, value) {
    return { ...originalObj, [key]: value }
}

const updatedObject = addProperty(originalObject, "age", 25);
console.log(updatedObject); // Output: { name: 'Alice', age: 25 }

// Oefening 4

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };

function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const mergedObject = mergeObjects(object1, object2);
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 }



// Oefening 5

function add(...args) {
    console.log(args.length);
    return args.reduce((a, b) => a + b); // Som van alles.
}

add(1, 5, 6); // 3
add(1, 5, 6, 5, 1561, 2, 5); // 7

// Oefening 6

function combineAllArrays(...args) {
    console.log(args.flat());
    return args.flat();
}

combineAllArrays([10, 12], [5, 4]); // [10, 12, 5, 4]
combineAllArrays([10, 12], [5, 4], [6, 6, 6]); // [10, 12, 5, 4, 6, 6];

// Oefening 7
function addOnlyNumbers(...args) {
    const sum = args.reduce((total, currentValue) => {
        if (typeof currentValue == 'number') {
            return total + currentValue;
        }

        return total;
    });

    console.log(`Er waren ${args.length} argumenten, de som van de getallen is ${sum}`);
}

addOnlyNumbers(1, 5, 6, 'cat', 'dog', 3);