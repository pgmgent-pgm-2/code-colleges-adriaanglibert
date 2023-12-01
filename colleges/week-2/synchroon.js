function task() {
    let n = 10000000000;
    while (n > 0) {
        n--;
    }
    console.log('De code is klaar');
}

// console.log('Starten met iets');
// task();
// console.log('Gedaan!');

function fetchDataSynchronous() {
    console.log('We gaan data gaan ophalen');
    let n = 10000000000;
    while (n > 0) {
        n--;
    }
    console.log('Gegevens opgehaald');
    return 'mijn gegevens';
}

const data = fetchDataSynchronous();
console.log('Hier verwerk ik mijn data', data);

console.log('Andere code uitvoeren die bijvoorbeeld eventlisteners toevoegt.');

