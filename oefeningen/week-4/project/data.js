function randomNumber(max = 100) {
    return Math.floor(Math.random() * max);
}

function createData(id) {
    return {
        id: id,
        value: randomNumber(),
        category: id % 2 === 0 ? 'Even' : 'Odd',
        isSpecial: id % 3 === 0,
        details: {
            importance: randomNumber(5) + 1,
            complexity: randomNumber(10) + 1,
        },
    }
}

function generateRandomData(amount = 25) {
    const data = [];

    for (let i = 0; i < amount; i++) {
        data.push(createData(i));
    }

    return data;
}

module.exports = {
    generateRandomData
}