const boardSize = 20;
let currentPlayer = "X";

export const board = Array.from({ length: boardSize }, () =>
  Array(boardSize).fill(null)
);

export const makeMove = (row, col) => {
  if (board[row][col] === null) {
    board[row][col] = currentPlayer;
  }
};

export const switchCurrentPlayer = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

export const checkWin = (player) => {
  return false;
};

export const isBoardFull = () => {
  return board.every((row) => row.every((cell) => cell !== null));
};

export const resetBoard = () => {
  board.forEach((row, rowIndex) => {
    row.fill(null);
  });
};
