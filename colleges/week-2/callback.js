// document.querySelector('#button').addEventListener('click', () => {
//     console.log('Ik heb op een button geklikt.');
// })
function fetchData(callback) {
    console.log("Start ophalen van gegevens");
    setTimeout(() => {
        console.log('Dit duurt lang en haalt gegevens op.');
        callback('Mijn gegevens');
    }, 2000);
}

function processData(data) {
    console.log("Mijn data is:", data);
}

fetchData(processData);
console.log('Andere code');


function fetchData(callback) {
    setTimeout(() => {
        console.log("Gegevens opgehaald");
        callback("Mijn gegevens");
    }, 2000);
}

function processData(data, callback) {
    setTimeout(() => {
        console.log("Gegevens verwerkt");
        callback(`Verwerkte gegevens: ${data}`);
    }, 2000);
}

function displayResult(result) {
    console.log("Resultaat weergeven:", result);
}

// Callback hell
fetchData((data) => {
    processData(data, (processedData) => {
        displayResult(processedData);
    });
});