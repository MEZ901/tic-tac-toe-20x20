import dayjs from "dayjs";
import {
  playerOneName,
  playerTwoName,
} from "../components/gamePlay/GamePlayHeader";

const boardSize = 20;

const maxDepth = 3;

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
  if (hasConnectFive(row, col)) {
    setWinner();
    setHistory();
    return true;
  }
  return false;
};

const hasConnectFive = (row, col) => {
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

export const computerMove = (row, col) => {
  const bestMove = findBestMove(row, col);
  console.log(bestMove);

  makeMove(bestMove.row, bestMove.col);
  if (checkWin(bestMove.row, bestMove.col)) {
    console.log(`The winner is ${currentPlayer}`);
  } else if (isBoardFull()) {
    console.log("the board is full");
  } else {
    switchCurrentPlayer();
  }
};

const findBestMove = (row, col) => {
  let bestMove = null;
  let bestScore = -Infinity;
  const depth = 2;
  const availableMoves = getAvailableMoves({ row, col });

  for (const move of availableMoves) {
    const score = minimax(move, depth, -Infinity, Infinity, false);
    console.log(`row: ${move.row}\ncol ${move.col}\nscore: ${score}`);
    if (score > bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
};

const minimax = (move, depth, alpha, beta, isMaximizing) => {
  const row = move.row;
  const col = move.col;

  if (depth === 0 || hasConnectFive(row, col) || isBoardFull()) {
    return evaluateBoard(row, col, isMaximizing);
  }

  if (isMaximizing) {
    let maxEval = -Infinity;
    const availableMoves = getAvailableMoves(move);

    for (const move of availableMoves) {
      const evaluate = minimax(move, depth - 1, alpha, beta, false);
      maxEval = Math.max(maxEval, evaluate);
      alpha = Math.max(alpha, evaluate);

      if (beta <= alpha) {
        break;
      }
    }

    return maxEval;
  } else {
    let minEval = Infinity;
    const availableMoves = getAvailableMoves(move);

    for (const move of availableMoves) {
      const evaluate = minimax(move, depth - 1, alpha, beta, true);
      minEval = Math.min(minEval, evaluate);
      beta = Math.min(beta, evaluate);

      if (beta <= alpha) {
        break;
      }
    }

    return minEval;
  }
};

const evaluateBoard = (row, col, isMaximizing) => {
  const playerSymbol = "X";
  const computerSymbol = "O";
  const currentPlayer = isMaximizing ? computerSymbol : playerSymbol;

  const winScore = 1000;
  const blockScore = 100;
  const centerScore = 10;
  const edgeScore = 5;
  const cornerScore = 3;

  let score = 0;

  if (hasConnectFive(row, col)) {
    if (currentPlayer === computerSymbol) {
      score += winScore;
    } else {
      score -= winScore;
    }
    return score;
  }

  const threats = calculateThreats(row, col, currentPlayer);
  const blocks = calculateThreats(
    row,
    col,
    currentPlayer === playerSymbol ? computerSymbol : playerSymbol
  );

  score += threats.length * blockScore - blocks.length * blockScore;

  if ((row === 9 || row === 10) && (col === 9 || col === 10)) {
    score += centerScore;
  } else if (row === 9 || row === 10 || col === 9 || col === 10) {
    score += edgeScore;
  } else if ((row === 0 || row === 19) && (col === 0 || col === 19)) {
    score += cornerScore;
  }

  return score;
};

const calculateThreats = (row, col, player) => {
  const threats = [];

  for (let i = -4; i <= 0; i++) {
    const consecutivePieces = [];
    for (let j = 0; j < 5; j++) {
      const newRow = row + i + j;
      const newCol = col;
      if (
        newRow >= 0 &&
        newRow < boardSize &&
        board[newRow][newCol] === player
      ) {
        consecutivePieces.push({ row: newRow, col: newCol });
      }
    }

    if (consecutivePieces.length === 4) {
      const leftGap = row + i - 1 >= 0 && board[row + i - 1][col] === null;
      const rightGap =
        row + i + 4 < boardSize && board[row + i + 5][col] === null;

      if (
        (leftGap || rightGap) &&
        !threats.some((threat) => threat.length === 4)
      ) {
        threats.push(consecutivePieces);
      }
    }
  }

  return threats;
};

const getAvailableMoves = (lastMove) => {
  const availableMoves = [];
  const searchRange = 4;

  for (let i = -searchRange; i <= searchRange; i++) {
    for (let j = -searchRange; j <= searchRange; j++) {
      const newRow = lastMove.row + i;
      const newCol = lastMove.col + j;

      if (
        newRow >= 0 &&
        newRow < boardSize &&
        newCol >= 0 &&
        newCol < boardSize &&
        board[newRow][newCol] === null
      ) {
        availableMoves.push({ row: newRow, col: newCol });
      }
    }
  }

  return availableMoves;
};
