import {
  checkWin,
  isBoardFull,
  makeMove,
  switchCurrentPlayer,
} from "./gameLogic";
import { BOARD_SIZE, board } from "./gameState";

export const computerMove = (row, col) => {
  const bestMove = findBestMove({ row, col });
  // console.log(bestMove);

  makeMove(bestMove.row, bestMove.col);
  switchCurrentPlayer();
};

const findBestMove = (lastMove) => {
  let bestMove = null;
  let bestScore = Infinity;
  const depth = 3;
  const availableMoves = getAvailableMoves(lastMove);

  for (const move of availableMoves) {
    const score = minimax(move, depth, -Infinity, Infinity, false);
    if (score < bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }

  return bestMove;
};

const minimax = (move, depth, alpha, beta, isMaximizing) => {
  const row = move.row;
  const col = move.col;
  const player = isMaximizing ? "X" : "O";

  if (depth === 0 || checkWin(row, col, player) || isBoardFull()) {
    return evaluateBoard(row, col, player);
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

const evaluateBoard = (row, col, player) => {
  const WIN_SCORE = 1000;
  const BLOCK_SCORE = 100;
  const CENTER_SCORE = 10;
  const EDGE_SCORE = 5;
  const CORNER_SCORE = 3;

  let score = 0;

  if (checkWin(row, col, player)) {
    score = player === "X" ? WIN_SCORE : -WIN_SCORE;
    return score;
  }

  const threats = calculateThreats(row, col, player);
  for (const threat of threats) {
    player === "X"
      ? (score += BLOCK_SCORE * threat.length)
      : (score -= BLOCK_SCORE * threat.length);
  }

  if ((row === 9 || row === 10) && (col === 9 || col === 10)) {
    player === "X" ? (score += CENTER_SCORE) : (score -= CENTER_SCORE);
  } else if (row === 9 || row === 10 || col === 9 || col === 10) {
    player === "X" ? (score += EDGE_SCORE) : (score -= EDGE_SCORE);
  } else if ((row === 0 || row === 19) && (col === 0 || col === 19)) {
    player === "X" ? (score += CORNER_SCORE) : (score -= CORNER_SCORE);
  }

  return score;
};

const calculateThreats = (row, col, player) => {
  const threats = [];

  const directions = [
    [0, 1],
    [1, 0],
    [1, 1],
    [1, -1],
  ];

  for (const [dx, dy] of directions) {
    let consecutivePieces = [];

    for (let i = -3; i <= 3; i++) {
      const newRow = row + i * dx;
      const newCol = col + i * dy;

      if (
        newRow >= 0 &&
        newRow < BOARD_SIZE &&
        newCol >= 0 &&
        newCol < BOARD_SIZE &&
        board[newRow][newCol] === (player === "X" ? "O" : "X")
      ) {
        consecutivePieces.push({ row: newRow, col: newCol });
      } else {
        if (consecutivePieces.length >= 3) {
          threats.push(consecutivePieces);
        }
        consecutivePieces = [];
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
        newRow < BOARD_SIZE &&
        newCol >= 0 &&
        newCol < BOARD_SIZE &&
        board[newRow][newCol] === null
      ) {
        availableMoves.push({ row: newRow, col: newCol });
      }
    }
  }

  return availableMoves;
};
