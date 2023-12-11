const fileSystem = require('fs');
const proc = require('process');
const path = require('path');

proc.on('exit', () => {
    console.log('Applicatie is afgesloten.');
})

const filePath = path.join('./', 'test.txt');

fileSystem.readFile(filePath, 'utf-8', (error, data) => {
    if (error) {
        console.error(error);
        return;
    }

    console.log(data);
});

fileSystem.readdir('./', (err, folderStructure) => {
    console.log('Bestanden:', folderStructure);
});



fileSystem.writeFile(filePath, 'Dit is aangepaste tekst!', (err) => {
    console.error(err);
})

