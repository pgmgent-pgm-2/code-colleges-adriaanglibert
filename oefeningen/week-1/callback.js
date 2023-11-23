function mainLogic(f) {
    console.log(f());
}

function myCallback() {
    return 'Hey, ik ben een callback functie!'
}

console.log(myCallback);

mainLogic(myCallback);