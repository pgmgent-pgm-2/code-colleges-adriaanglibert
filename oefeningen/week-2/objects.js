const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022,
    color: 'Blue',
    getBrand: function () {
        console.log(this.brand);
    }
}

car.color = 'Red';
car.getBrand();
car.fuel = 'Gas';
delete car.year;

const person = {
    name: 'Anna',
    age: 25,
    address: {
        street: 'Hoofdstraat',
        number: 123,
        city: 'Stadsville'
    }
}

function getStreetNumber({ address: { number: streetNumber } }) {
    console.log(streetNumber);
}

getStreetNumber(person);

person.telephone = '+32471234567';

const extraInfo = {
    hobby: 'Running'
};

// person.extra = extraInfo;
const updatedPerson = { ...person, ...extraInfo };

function zijnObjectenIdentiek(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(zijnObjectenIdentiek(objectA, objectB)); // true

const shoppingCart = {
    item1: { name: "Product 1", price: 20 },
    item2: { name: "Product 2", price: 30 },
    item3: { name: "Product 3", price: 15 },
};

// Gebruik Object.keys() om de namen van de items weer te geven
const itemNames = Object.keys(shoppingCart).map(itemKey => shoppingCart[itemKey].name);
console.log("Namen van items:", itemNames);

// Gebruik Object.values() om de prijzen van de items weer te geven
const itemPrices = Object.values(shoppingCart).map(itemDetail => itemDetail.price);
console.log("Prijzen van items:", itemPrices);

// Gebruik Object.entries() om zowel de namen als prijzen van de items weer te geven
const itemEntries = Object.entries(shoppingCart).map(([, { name, price }]) => `${name}: ${price}`);
console.log("Namen en prijzen van items:", itemEntries);

