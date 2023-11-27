const person = {
    name: 'Alice',
    age: 25,
    city: 'Ghent'
}

// Old declaration
const oldFirstName = person.name;
const oldAge = person.age;
const oldCity = person.city;

// With destructuring
const { city: pizza, name: firstName = 'Jan', age, gender = 'other' } = person;
console.log(firstName, age, pizza, gender);

function showPerson(firstN, ageOfp, residence) {
    console.log(firstN, ageOfp, residence);
}

function showPersonWithObject(pers) {
    console.log(pers.name, pers.age, pers.city);
}

function showPersonWithObjectOld(pers) {
    const age = pers.age;

    console.log(age);
}

function showPersonWithDestructuring({ age }) {
    // const {age} = pers;

    console.log(age);
}

showPerson(person.name, person.age, person.city);
showPersonWithObject(person);

