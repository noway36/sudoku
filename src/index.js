module.exports = function solveSudoku(matrix) {
    //Backtracking
    return solveSudoku(matrix);

    function solveSudoku(matrix) {
        let pos = getZeroesPos(matrix);
        let row = pos[0];
        let col = pos[1];
        if (row == undefined) {
            return matrix;
        }

        for (let num = 1; num <= 9; num++) {
            if (
                checkRow(matrix, row, num) &&
                checkCol(matrix, col, num) &&
                checkBox(matrix, row, col, num)
            ) {
                matrix[row][col] = num;
                if (solveSudoku(matrix, row, col)) {
                    return matrix;
                }
                matrix[row][col] = 0;
            }
        }
}

    function getZeroesPos(matrix) {
        let done = false, row = 0, col = 0; 
        let arr = [];
        while (!done) {
            if (row == 9) {
                done = true;
            } else {
                if (matrix[row][col] == 0) {
                    arr.push(row);
                    arr.push(col);
                    done = true;
                } else {
                    if (col < 8) {
                        col++;
                    } else {
                        row++;
                        col = 0;
                    }
                }
            }
        }
        return arr;
    }

    function checkRow(matrix, row, num) {
        for (let col = 0; col < 9; col++)
            if (matrix[row][col] == num)
                return false;

        return true;
    }

    function checkCol(matrix, col, num) {
        for (let row = 0; row < 9; row++){
            if (matrix[row][col] == num)
                return false;
        }
        return true;    
    }
    
    function checkBox(matrix, row, col, num) {
        row = Math.floor(row / 3) * 3;
        col = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++){
            for (let j = 0; j < 3; j++){
                if (matrix[row + i][col + j] == num)
                    return false;
            }
        }
        return true;
    }
}
