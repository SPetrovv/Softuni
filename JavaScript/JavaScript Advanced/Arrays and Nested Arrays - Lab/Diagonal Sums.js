function diagonalSums(input) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let firstIndex = 0;
    let secondIndex = input[0].length - 1;
    
    for (let array of input) {
        firstDiagonal += array[firstIndex++];
        secondDiagonal += array[secondIndex--];
    }

    console.log(firstDiagonal + ' ' + secondDiagonal);
}

diagonalSums([[20, 40],
    [10, 60]]);

console.log();

diagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);