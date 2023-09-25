import { board, winner } from "../utils/gameLogic";

const TicTacToeBoard = () => {
  const boardSize = 20;
  let boardHTML = "";

  for (let i = 0; i < boardSize; i++) {
    boardHTML += '<div class="flex">';
    for (let j = 0; j < boardSize; j++) {
      boardHTML += `
        <div
          class="w-8 h-8 border border-gray-300 flex items-center justify-center cursor-pointer font-extrabold text-3xl ${
            board[i][j] === "X" ? "text-blue-500" : "text-red-500"
          } ${winner ? "" : "cell"}"
          data-row="${i}"
          data-col="${j}"
        >
          ${board[i][j] || ""}
        </div>
      `;
    }
    boardHTML += "</div>";
  }

  return `
    <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-8 rounded-lg shadow-2xl">
        ${boardHTML}
    </div>
  `;
};

export default TicTacToeBoard;
