
window.addEventListener("load", init);
const numRows = 3;
const numCols = 3;
const goal = 3;
let numEmptyCells = numRows*numCols;
let player = 0;
let markers = ['o', 'x'];
let gameIsOver = false;
const board = new Array(numEmptyCells);

function init() {
    buildBoard(numRows, numCols);
}

function game(e) {
    if (gameIsOver)
        return window.alert('Game is done!');
    let cell = e.target;
    let cellIndex = cell.id;
    if (board[cellIndex])
        return window.alert('Cell is already filled!');

    board[cellIndex] = markers[player];
    cell.classList.add(markers[player]);
    numEmptyCells--;

    if (checkWin(cellIndex)) {
        gameIsOver = true;
        console.log('Win for player ' + markers[player]);
        return window.alert(markers[player] + ' player won!');
    }

    if (!numEmptyCells) {
        gameIsOver = true;
        return window.alert('Game is a draw!');
    }

    swapTurn();
}

function swapTurn() {
    player = player == 0 ? 1 : 0;
}

function buildBoard(rows, cols) {
    let gameBoard = document.querySelector('#game-board');
    for (let r = 0; r < numRows; r++) {
        let newRow = document.createElement('div');
        newRow.classList.add('row');
        gameBoard.appendChild(newRow);

        for (let c = 0; c < numCols; c++) {
            let newCell = document.createElement('div');
            newCell.classList.add('cell');
            newCell.id = toIndex(r, c);
            newCell.addEventListener("click", game);
            newRow.appendChild(newCell);
        }
    }
}

function checkWin(index) {
    let col = index % numRows;
    let row = (index - col) / numRows;

    let colLowerBound = Math.max(0, col - goal + 1);
    let colUpperBound = Math.min(numCols - 1, col + goal - 1);

    let rowLowerBound = Math.max(0, row - goal + 1);
    let rowUpperBound = Math.min(numRows - 1, row + goal - 1);

    console.log('Placed tile for Player ' + player + ' at ' + row + ', ' + col);

    // Checking (rows) verticals
    let consecutive = 0;
    console.log('Checking row range from ' + rowLowerBound + ' to ' + rowUpperBound);

    for (let r = rowLowerBound; r <= rowUpperBound; r++) {
        if (board[toIndex(r, col)] === markers[player]) {
            consecutive++;
            if (consecutive === goal) {
                return true;
            }
        } else {
            consecutive = 0;
        }
    }

    // Checking (columns) horizntals
    consecutive = 0;
    console.log('Checking column range from ' + colLowerBound + ' to ' + colUpperBound);
    for (let c = colLowerBound; c <= colUpperBound; c++) {
        if (board[toIndex(row, c)] === markers[player]) {
            consecutive++;
            if (consecutive === goal) {
                return true;
            }
        } else {
            consecutive = 0;
        }
    }

    // Checking major diagonal
    return false;
}

function checkBoard(row, col) {
    if (row >= numRows || col >= numCols)
        return '';
    return board[toIndex(row, col)];
}

function toIndex(row, col) {
    return row*numCols + col;
}
