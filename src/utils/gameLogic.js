import dayjs from "dayjs";
import {
  playerOneName,
  playerTwoName,
} from "../components/gamePlay/GamePlayHeader";

const boardSize = 20;

export let currentPlayer = "X";

export let winner = null;

export let isComputerTurn = false;

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
  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  for (const [dx, dy] of directions) {
    let streak = 0;

    for (let i = -4; i <= 4; i++) {
      const newRow = row + i * dx;
      const newCol = col + i * dy;

      if (
        newRow >= 0 &&
        newRow < boardSize &&
        newCol >= 0 &&
        newCol < boardSize &&
        board[newRow][newCol] === currentPlayer
      ) {
        streak++;
        if (streak === 5) {
          setWinner();
          setHistory();
          return true;
        }
      } else {
        streak = 0;
      }
    }
  }

  return false;
};

export const isBoardFull = () => {
  if (board.every((row) => row.every((cell) => cell !== null))) {
    setHistory();
    return true;
  }
  return false;
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

const setHistory = () => {
  const existingHistory = localStorage.getItem("gameHistory");
  const history = existingHistory ? JSON.parse(existingHistory) : [];

  const result = {
    players: `${playerOneName} vs ${playerTwoName}`,
    winner: winner || "TIE",
    dateTime: dayjs().format("DD/MM/YYYY - HH:mm"),
  };

  history.push(result);

  localStorage.setItem("gameHistory", JSON.stringify(history));
};

export const computerTurn = () => {
  // isComputerTurn = true;
  const bestMove = findBestMove();
  makeMove(bestMove.row, bestMove.col);

  if (checkWin(bestMove.row, bestMove.col)) {
    console.log(`The winner is ${currentPlayer}`);
  } else if (isBoardFull()) {
    console.log("the board is full");
  } else {
    switchCurrentPlayer();
  }

  console.log(findBestMove());
};

const findBestMove = () => {
  return {
    row: 0,
    col: 0,
  };
};
