const population = {
    male: 5,
    female: 20,
    others: 10,
    x: 30
}

const translation = {
    male: 'Mannen',
    female: 'Vrouwen',
    others: 'Anderen'
}

console.log(`Er zijn ${population.male} mannen.`)
console.log(`Er zijn ${population.female} vrouwen.`)
console.log(`Er zijn ${population.others} anderen.`)

for (const key in population) {
    console.log(`Er zijn ${population[key]} ${translation[key]}`)
}

const newArr = new Array();
console.log(Object.keys(population));

const objectAsArrayWithKeys = Object.keys(population);

objectAsArrayWithKeys.forEach((key) => {
    console.log(key);
    console.log(population[key]);
});

for (const key of objectAsArrayWithKeys) {
    console.log(key);
    console.log(population[key]);
}


const configOptions = {
    theme: 'Dark',
    fontSize: 15,
    language: 'en-US'
}

Object.keys(configOptions);

const objectAsArrayWithValues = Object.values(population);
console.log(objectAsArrayWithValues);

const objectAsArrayWithKeysAndValues = Object.entries(population);
console.log(objectAsArrayWithKeysAndValues);

objectAsArrayWithKeysAndValues.forEach(keyValue => {
    console.log(keyValue[0], keyValue[1]);
});

const data = [['male', 5], ['female', 20], ['others', 10]];
const femaleInPopulation = data.find(array => {
    return array[0] === 'female';
})[1];

const arrayTransformedToObject = Object.fromEntries(data);
Object.values(Object.fromEntries(data));
console.log(`Het aantal vrouwen is ${arrayTransformedToObject.female}`);

const car = {
    brand: 'Toyota',
    model: 'Prius',
    showSpecs() {
        console.log(`De auto is een ${this.brand}`);
    }
}

const favoriteBook = {
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    pages: 336,
    increasePages(amount) {
        this.pages += amount;
    },
    decreasePages: function (amount) {
        this.pages -= amount;
    },
    showPages: function () {
        console.log(this.pages);
    }
}

favoriteBook.showPages();
favoriteBook.increasePages(10);
favoriteBook.showPages();

function increasePages(book, amount) {
    return book.pages += amount;
};

increasePages(favoriteBook, 20);
console.log(favoriteBook);