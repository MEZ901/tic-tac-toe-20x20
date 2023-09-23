import { currentPlayer } from "../utils/gameLogic";
import { playerOneName, playerTwoName } from "./PlayerSetup";

const GamePlayHeader = () => {
  const winner = localStorage.getItem("winner");

  if (winner !== "null") {
    return `
      <div class="flex items-center">
        
      </div>
    `;
  } else
    return `
    <div class="flex items-center">
      <div class="m-4 flex flex-col items-center text-2xl font-bold ${
        currentPlayer === "X" ? "text-blue-500" : "text-black"
      }">
        <p class="font-bold">${playerOneName}</p>
        <p>(X)</p>
      </div>

      <div class="m-4 flex flex-col items-center text-2xl">
        <p>vs</p>
      </div>

      <div class="m-4 flex flex-col items-center text-2xl font-bold ${
        currentPlayer === "O" ? "text-red-500" : "text-black"
      }">
        <p class="font-bold">${playerTwoName}</p>
        <p>(O)</p>
      </div>
    </div>
  `;
};

export default GamePlayHeader;
