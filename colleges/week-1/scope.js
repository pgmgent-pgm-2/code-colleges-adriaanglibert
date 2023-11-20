const isFun = true;

function sum() {
    const firstNumber = 1;
    const secondNumber = 2;

    console.log(firstNumber); // 1
    console.log(isFun); // true
    return firstNumber + secondNumber;
}

console.log(firstNumber); // Not defined

function externalFunction(value) {
    console.log('Ik ben externe code');
    console.log(value);
}

console.log(value); // Fout

function outerFunction() {
    const outerVariable = 'Ik ben buiten!';
    externalFunction(outerVariable);

    function innerFunction() {
        const innerVariable = 'Ik ben binnen!';
        console.log(innerVariable);
        console.log(outerVariable); //
    }


    console.log(innerVariable);
    console.log(outerVariable);
    innerFunction();
}

innerFunction(); // Fout!