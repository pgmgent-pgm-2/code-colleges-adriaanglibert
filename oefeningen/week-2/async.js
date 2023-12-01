// Oefening 1
function calculateSquare(number, callback) {
    const square = number * number;
    callback(number, square);
}

function showNumber(number, square) {
    console.log(`De vierkantswortel van ${number} is ${square}`);
}

calculateSquare(4, showNumber);

// Oefening 2
function fetchData() {
    return new Promise((resolve, reject) => {
        const data = { firstName: 'Adriaan', lastName: 'Glibert' };
        resolve(data);
    })
}

function processData(data) {
    return new Promise((resolve, reject) => {
        resolve(`De voornaam is: ${data.firstName} en de achternaam is ${data.lastName}`)
    })
}

function displayResult(result) {
    console.log(result)
}

fetchData()
    .then(rawData => processData(rawData))
    .then(sentence => displayResult(sentence));

// Oefening 3
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        const odds = Math.random() * 100;

        setTimeout(() => {
            if (odds <= 70) {
                resolve('Mijn gegevens.');
            } else {
                reject({ message: 'Er ging iets mis' });
            }
        }, 2000);
    });
}

fetchDataWithPromise()
    .then(result => {
        console.log('Gegevens opgehaald:', result);
    })
    .catch(error => {
        console.log('Fout bij ophalen van gegevens', error.message);
    })