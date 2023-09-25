import { playerOneName, playerTwoName } from "../components/GamePlayHeader";

const boardSize = 20;

export let currentPlayer = "X";

export let winner = null;

export const board = Array.from({ length: boardSize }, () =>
  Array(boardSize).fill(null)
);

export const makeMove = (row, col) => {
  board[row][col] = currentPlayer;
};

export const switchCurrentPlayer = () => {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

export const checkWin = (row, col) => {
  let streak = 0;

  for (let i = col - 4; i <= col + 4; i++) {
    if (i >= 0 && i < boardSize) {
      if (board[row][i] === currentPlayer) {
        if (streak < 5) {
          streak++;
        }
      } else {
        streak = 0;
      }

      if (streak === 5) {
        setWinner();
        return true;
      }
    }
  }

  streak = 0;

  for (let i = row - 4; i <= row + 4; i++) {
    if (i >= 0 && i < boardSize) {
      if (board[i][col] === currentPlayer) {
        if (streak < 5) {
          streak++;
        }
      } else {
        streak = 0;
      }

      if (streak === 5) {
        setWinner();
        return true;
      }
    }
  }

  streak = 0;

  for (let i = row - 4, j = col - 4; i <= row + 4 && j <= col + 4; i++, j++) {
    if (i >= 0 && i < boardSize && j >= 0 && j < boardSize) {
      if (board[i][j] === currentPlayer) {
        if (streak < 5) {
          streak++;
        }
      } else {
        streak = 0;
      }

      if (streak === 5) {
        setWinner();
        return true;
      }
    }
  }

  streak = 0;

  for (let i = row - 4, j = col + 4; i <= row + 4 && j >= col - 4; i++, j--) {
    if (i >= 0 && i < boardSize && j >= 0 && j < boardSize) {
      if (board[i][j] === currentPlayer) {
        if (streak < 5) {
          streak++;
        }
      } else {
        streak = 0;
      }

      if (streak === 5) {
        setWinner();
        return true;
      }
    }
  }

  return false;
};

export const isBoardFull = () => {
  return board.every((row) => row.every((cell) => cell !== null));
};

export const isCellEmpty = (row, col) => {
  return board[row][col] === null;
};

export const resetBoard = () => {
  board.forEach((row, rowIndex) => {
    row.fill(null);
  });
};

export const resetGame = () => {
  currentPlayer = "X";
  winner = null;
  board.forEach((row, rowIndex) => {
    row.fill(null);
  });
};

const setWinner = () => {
  winner = currentPlayer === "X" ? playerOneName : playerTwoName;
};
