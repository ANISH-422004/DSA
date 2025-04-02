/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

let solve = (board, row, col) => {
    if (row === 9) return true; // If row reaches beyond board size, Sudoku is solved

    if (col === 9) {  
        return solve(board, row + 1, 0); // Move to next row
    }

    if (board[row][col] !== ".") {  
        return solve(board, row, col + 1); // Move to next column
    } 

    for (let i = 1; i <= 9; i++) { // Loop through numbers 1-9
        let num = i.toString(); // Convert number to string

        if (isValid(board, row, col, num)) {
            board[row][col] = num; // Place number

            if (solve(board, row, col + 1)) return true; // Move to next column

            board[row][col] = "."; // Backtrack if not valid
        }
    }

    return false;
};

let isValid = (board, row, col, num) => {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num) return false; // Check row
        if (board[i][col] === num) return false; // Check column
    }

    let boxRow = Math.floor(row / 3) * 3;
    let boxCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 3; i++) { 
        for (let j = 0; j < 3; j++) {
            if (board[boxRow + i][boxCol + j] === num) return false; // Check 3x3 box
        }
    }

    return true;
};

var solveSudoku = function (board) {
    solve(board, 0, 0);
};
