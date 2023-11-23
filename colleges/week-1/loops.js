const colors = ['red', 'green', 'blue'];

for (let loopNumber = 0; loopNumber < colors.length; loopNumber++) {
    console.log(colors[loopNumber])
}



for (const color of colors) {
    console.log(color);
}

const [firstValue, secondValue] = [1, 2];

for (const entry of colors.entries()) {
    const index = entry[0];
    const value = entry[1];
    console.log(index);
    console.log(value)
}

for (const [index, value] of colors.entries()) {
    console.log(index);
    console.log(value)
}

colors.forEach(function (color, i) {
    console.log('Kleur!', color, i);
})

colors.forEach((color, i) => {
    console.log('Kleur!', color, i);
})

colors.forEach(color => console.log(color));