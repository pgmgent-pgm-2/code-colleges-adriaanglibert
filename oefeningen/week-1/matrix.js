const matrix = [
    [1, 2, 3],
    [4, 5, 6]
];

function getNumberFromMatrix(arr, row, col) {
    return arr[row - 1][col - 1];
}

getNumberFromMatrix(matrix, 2, 3) // 6
console.log(getNumberFromMatrix(matrix, 2, 3));