(function () {
  window.addEventListener("load", init);
  let numRows = 9;
  let numCols = 9;
  let goal = 5;
  let numEmptyCells = 1;

  let player = 0;
  let markers = ['o', 'x'];
  let gameIsOver = false;
  const board = new Array(numEmptyCells);

  function init() {
    document.getElementById('submit-settings').addEventListener("click", getInput);
  }

  function getInput() {
    numRows = document.getElementById("height").value;
    numCols = document.getElementById("width").value;
    //goal = document.getElementById("goal").value;

    numEmptyCells = numRows * numCols;
    buildBoard(numRows, numCols);
    document.getElementById("game-settings").remove();
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
    let range = goal - 1;

    // Checking (rows) verticals
    let consecutive = 0;
    consecutive = 0;
    for (let i = -range; i <= range; i++) {
      if (checkBoard(row + i, col) === markers[player]) {
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
    for (let i = -range; i <= range; i++) {
      if (checkBoard(row, col + i) === markers[player]) {
        consecutive++;
        if (consecutive === goal) {
          return true;
        }
      } else {
        consecutive = 0;
      }
    }

    // Checking major diagonal
    consecutive = 0;
    for (let i = -range; i <= range; i++) {
      if (checkBoard(row + i, col + i) === markers[player]) {
        consecutive++;
        if (consecutive === goal) {
          return true;
        }
      } else {
        consecutive = 0;
      }
    }

    // Checking minor diagonal
    consecutive = 0;
    for (let i = -range; i <= range; i++) {
      if (checkBoard(row - i, col + i) === markers[player]) {
        consecutive++;
        if (consecutive === goal) {
          return true;
        }
      } else {
        consecutive = 0;
      }
    }
    return false;
  }

  function checkBoard(row, col) {
    if (row >= numRows || col >= numCols)
      return '';
    return board[toIndex(row, col)];
  }

  function toIndex(row, col) {
    return row * numCols + col;
  }
  // copy over the content of script.js
})();