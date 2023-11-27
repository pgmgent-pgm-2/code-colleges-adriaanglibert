const person = {
    name: "Stijn",
    age: 26,
    hasCold: true,
    children: [
        {
            name: "Ella",
            age: 2,
            hasCold: false,
            children: []
        }
    ],
    car: {
        brand: "Toyota",
        model: "Corola"
    }
}

const propertyName = 'age';
console.log(person.age);
console.log(person['age']);
console.log(person[propertyName]);
console.log(person.car.brand);

const productPrices = {
    belgium: 50,
    france: 55,
    usa: 60
}

const selectedCountry = "usa"

console.log(productPrices[selectedCountry]);

person.hairColor = 'brown';
person.address = {
    street: "Parklaan",
    number: 15,
    city: 'Ghent',
    postalCode: 9000
}


const userInput = 'Schoenmaat';
const userInputValue = 45;

person[userInput.toLowerCase()] = userInputValue;

delete person.hairColor;
console.log(person);