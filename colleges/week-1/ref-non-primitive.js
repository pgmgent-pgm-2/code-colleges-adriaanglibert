const originalObject = {
    number: 5
}

function changeNumber(obj) {
    obj.number = 13;
    console.log(obj.number); // 13
}

changeNumber(originalObject);

console.log(originalObject.number);


let firstName = 'Jan';

function changeName(fName) {
    fName = 'John';
}

changeName(firstName);
console.log(firstName);