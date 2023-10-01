import dayjs from "dayjs";
import {
  playerOneName,
  playerTwoName,
} from "../components/gamePlay/GamePlayHeader";
import {
  BOARD_SIZE,
  board,
  currentPlayer,
  setCurrentPlayer,
  setIsGameOver,
  setWinner,
  winner,
} from "./gameState";

export const makeMove = (row, col) => {
  board[row][col] = currentPlayer();
};

export const switchCurrentPlayer = () => {
  setCurrentPlayer(currentPlayer() === "X" ? "O" : "X");
};

export const checkWin = (row, col, player) => {
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
        newRow < BOARD_SIZE &&
        newCol >= 0 &&
        newCol < BOARD_SIZE &&
        board[newRow][newCol] === player
      ) {
        streak++;
        if (streak === 5) return true;
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

export const resetGame = () => {
  setCurrentPlayer("X");
  setWinner(null);
  setIsGameOver(false);
  board.forEach((row) => {
    row.fill(null);
  });
};

export const setHistory = () => {
  const existingHistory = localStorage.getItem("gameHistory");
  const history = existingHistory ? JSON.parse(existingHistory) : [];

  const result = {
    players: `${playerOneName} vs ${playerTwoName}`,
    winner: winner() || "Draw",
    dateTime: dayjs().format("DD/MM/YYYY - HH:mm"),
  };

  history.push(result);

  localStorage.setItem("gameHistory", JSON.stringify(history));
};
