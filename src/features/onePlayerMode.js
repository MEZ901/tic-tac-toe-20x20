// import {
//   board,
//   boardSize,
//   checkWin,
//   currentPlayer,
//   hasConnectFive,
//   isBoardFull,
//   makeMove,
//   switchCurrentPlayer,
// } from "./gameLogic";

// export const computerMove = (row, col) => {
//   const bestMove = findBestMove(row, col);
//   console.log(bestMove);

//   makeMove(bestMove.row, bestMove.col);
//   if (checkWin(bestMove.row, bestMove.col)) {
//     console.log(`The winner is ${currentPlayer}`);
//   } else if (isBoardFull()) {
//     console.log("the board is full");
//   } else {
//     switchCurrentPlayer();
//   }
// };

// const findBestMove = (row, col) => {
//   let bestMove = null;
//   let bestScore = -Infinity;
//   const depth = 2;
//   const availableMoves = getAvailableMoves({ row, col });

//   for (const move of availableMoves) {
//     const score = minimax(move, depth, -Infinity, Infinity, false);
//     console.log(`row: ${move.row}\ncol ${move.col}\nscore: ${score}`);
//     if (score > bestScore) {
//       bestScore = score;
//       bestMove = move;
//     }
//   }

//   return bestMove;
// };

// const minimax = (move, depth, alpha, beta, isMaximizing) => {
//   const row = move.row;
//   const col = move.col;

//   if (depth === 0 || hasConnectFive(row, col) || isBoardFull()) {
//     return evaluateBoard(row, col, isMaximizing);
//   }

//   if (isMaximizing) {
//     let maxEval = -Infinity;
//     const availableMoves = getAvailableMoves(move);

//     for (const move of availableMoves) {
//       const evaluate = minimax(move, depth - 1, alpha, beta, false);
//       maxEval = Math.max(maxEval, evaluate);
//       alpha = Math.max(alpha, evaluate);

//       if (beta <= alpha) {
//         break;
//       }
//     }

//     return maxEval;
//   } else {
//     let minEval = Infinity;
//     const availableMoves = getAvailableMoves(move);

//     for (const move of availableMoves) {
//       const evaluate = minimax(move, depth - 1, alpha, beta, true);
//       minEval = Math.min(minEval, evaluate);
//       beta = Math.min(beta, evaluate);

//       if (beta <= alpha) {
//         break;
//       }
//     }

//     return minEval;
//   }
// };

// const evaluateBoard = (row, col, isMaximizing) => {
//   const playerSymbol = "X";
//   const computerSymbol = "O";
//   const currentPlayer = isMaximizing ? computerSymbol : playerSymbol;

//   const winScore = 1000;
//   const blockScore = 100;
//   const centerScore = 10;
//   const edgeScore = 5;
//   const cornerScore = 3;

//   let score = 0;

//   if (hasConnectFive(row, col)) {
//     return isMaximizing ? winScore : -winScore;
//   }

//   const threats = calculateThreats(row, col, currentPlayer);
//   const blocks = calculateThreats(
//     row,
//     col,
//     currentPlayer === playerSymbol ? computerSymbol : playerSymbol
//   );

//   score += threats.length * blockScore - blocks.length * blockScore;

//   if ((row === 9 || row === 10) && (col === 9 || col === 10)) {
//     score += centerScore;
//   } else if (row === 9 || row === 10 || col === 9 || col === 10) {
//     score += edgeScore;
//   } else if ((row === 0 || row === 19) && (col === 0 || col === 19)) {
//     score += cornerScore;
//   }

//   return score;
// };

// const calculateThreats = (row, col, player) => {
//   const threats = [];

//   const directions = [
//     [0, 1],
//     [1, 0],
//     [1, 1],
//     [1, -1],
//   ];

//   for (const [dx, dy] of directions) {
//     const consecutivePieces = [];
//     for (let i = -1; i <= 1; i++) {
//       for (let j = 1; j <= 5; j++) {
//         const newRow = row + i * dy * j;
//         const newCol = col + i * dx * j;

//         if (
//           newRow >= 0 &&
//           newRow < boardSize &&
//           newCol >= 0 &&
//           newCol < boardSize &&
//           board[newRow][newCol] === player
//         ) {
//           consecutivePieces.push({ row: newRow, col: newCol });
//         } else {
//           break;
//         }
//       }
//     }

//     if (consecutivePieces.length >= 3) {
//       threats.push(consecutivePieces);
//     }
//   }

//   return threats;
// };

// const getAvailableMoves = (lastMove) => {
//   const availableMoves = [];
//   const searchRange = 4;

//   for (let i = -searchRange; i <= searchRange; i++) {
//     for (let j = -searchRange; j <= searchRange; j++) {
//       const newRow = lastMove.row + i;
//       const newCol = lastMove.col + j;

//       if (
//         newRow >= 0 &&
//         newRow < boardSize &&
//         newCol >= 0 &&
//         newCol < boardSize &&
//         board[newRow][newCol] === null
//       ) {
//         availableMoves.push({ row: newRow, col: newCol });
//       }
//     }
//   }

//   //   for (let i = 0; i < boardSize; i++) {
//   //     for (let j = 0; j < boardSize; j++) {
//   //       if (board[i][j] === null) {
//   //         availableMoves.push({ row: i, col: j });
//   //       }
//   //     }
//   //   }

//   return availableMoves;
// };

export const computerMove = () => {
  console.log("hh");
};
