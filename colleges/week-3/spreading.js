const str = 'Hello';

console.log([...str]);

// Kopiëren van arrays
// Referentie valt weg!
const fruits = ['Banaan', 'Aardbei', 'Kiwi'];
const rottenFruits = [...fruits];

fruits.push('Peer');

// Items toe te voegen zonder de originele array te manipuleren
let updatedBasket = ['Abrikoos', ...fruits];
updatedBasket = [...updatedBasket, 'Citroen'];

const arrayOne = [1, 2, 3];
const arrayTwo = [4, 5, 6];
const bigArray = [...arrayOne, 3.5, ...arrayTwo];

// Functieargumenten
const numbers = [2, 3, 3, 8];

function sum(a, b, c, d) {
    return a + b + c + d;
}

console.log(sum(...numbers));

const dateFields = [1970, 0, 1];
const date = new Date(...dateFields);

// Parameters

function logAllArguments(...args) {
    console.log(args);
}

logAllArguments('Een');
logAllArguments(1, 3, 'Nog arguments');

// Objecten loskoppelen van hun referentie
const person = {
    name: 'Jan',
    age: 29
}

// const personCopy = person;
const personCopy = { ...person };

person.gender = 'male';

// Objecten mergen
const extraPersonInfo = {
    siblings: 5,
    hobbies: [
        'Hockey',
        'Gamen'
    ]
}

const personWithMoreInfo = { ...person, ...extraPersonInfo, hairColor: 'Black' }

