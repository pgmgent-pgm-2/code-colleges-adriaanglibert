// Vermijden

const number = '5';
const otherNumber = 5;

// Gebruik altijd 3 gelijkaantekens om te vergelijken.
number == otherNumber;
number === otherNumber;

// Naamgeving

const num = 25;

// throw 'Er ging iets mis';
// throw 666;

// console.log(new Error('Er ging iets mis'));

// throw new Error('Er ging iets mis.');

try {
    const errorCode = 500;

    switch (errorCode) {
        case 404:
            throw new Error('Pagina niet gevonden');
        case 500:
            throw new Error('Server error');
        default:
            throw new Error('Er ging iets mis.');
    }
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Altijd op het einde worden uitgevoerd.');
}

function getMonthNameByNumber(monthNumber) {
    monthNumber = monthNumber - 1;
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    if (months[monthNumber]) {
        return months[monthNumber];
    } else {
        throw new Error("INVALID_MONTH_NUMBER");
    }
}

try {
    monthName = getMonthNameByNumber(16);
    console.log(monthName);
} catch (error) {
    console.log(error.message);
}

class CustomError extends Error {
    constructor(...args) {
        super(...args);

        this.date = new Date();
    }
}

throw new CustomError('Foutmelding');