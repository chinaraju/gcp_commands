

// const cells = document.querySelectorAll('.cell');
// const message = document.getElementById('message');
// const resetButton = document.getElementById('reset-button');
// let currentPlayer = 'X';
// let gameBoard = ['', '', '', '', '', '', '', '', ''];

// const winningCombinations = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// function handleCellClick(event) {
//   const cellIndex = event.target.dataset.cellIndex;

//   // Check if game is over before processing clicks
//   if (checkWinner() || isTie()) {
//     return;
//   }

//   // Check if cell is empty
//   if (gameBoard[cellIndex] === '') {
//     gameBoard[cellIndex] = currentPlayer;
//     event.target.textContent = currentPlayer;

//     const winner = checkWinner();
//     if (winner) {
//       message.textContent = `Player ${winner} wins!`;
//       disableCells(); // Disable further clicks after win
//       return;
//     }

//     currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//     message.textContent = `Player ${currentPlayer}'s turn`;
//   } else {
//     message.textContent = 'Cell already occupied!';
//   }
// }

// function checkWinner() {
//   for (let i = 0; i < winningCombinations.length; i++) {
//     const combination = winningCombinations[i];
//     const player = gameBoard[combination[0]];
//     if (player !== '' && player === gameBoard[combination[1]] && player === gameBoard[combination[2]]) {
//       return player;
//     }
//   }
//   return null; // No winner yet
// }

// function disableCells() {
//   cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
// }

// function isTie() {
//   // Check if all cells are filled (no empty cells)
//   return gameBoard.every(cell => cell !== '');
// }

// cells.forEach(cell => {
//   cell.addEventListener('click', handleCellClick);
// });

// resetButton.addEventListener('click', () => {
//   currentPlayer = 'X';
//   gameBoard = ['', '', '', '', '', '', '', '', ''];
//   cells.forEach(cell => cell.textContent = '');
//   message.textContent = '';
//   enableCells(); // Re-enable clicks after a reset
// });

// function enableCells() {
//   cells.forEach(cell => cell.addEventListener('click', handleCellClick));
// }

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellClick(event) {
  const cellIndex = event.target.dataset.cellIndex;

  // Check if game is over before processing clicks
  if (checkWinner() || isTie()) {
    return;
  }

  // Check if cell is empty
  if (gameBoard[cellIndex] === '') {
    gameBoard[cellIndex] = currentPlayer;
    event.target.textContent = currentPlayer;

    const winner = checkWinner();
    if (winner) {
      message.textContent = `Player ${winner} wins!`;
      disableCells(); // Disable further clicks after win
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `Player ${currentPlayer}'s turn`;
  } else {
    message.textContent = 'Cell already occupied!';
  }
}

function checkWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const combination = winningCombinations[i];
    const player = gameBoard[combination[0]];
    if (player !== '' && player === gameBoard[combination[1]] && player === gameBoard[combination[2]]) {
      return player;
    }
  }
  return null; // No winner yet
}

function disableCells() {
  cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
}

function isTie() {
  // Check if all cells are filled (no empty cells)
  return gameBoard.every(cell => cell !== '');
}

cells.forEach(cell => {
  cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', () => {
  // Refresh the page on "Play Again" click
  location.reload();
});
