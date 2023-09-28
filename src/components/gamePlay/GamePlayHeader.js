import { currentPlayer, winner } from "../../utils/gameLogic";

export let playerOneName;
export let playerTwoName;
export let mode;

const GamePlayHeader = () => {
  playerOneName = localStorage.getItem("playerOneName");
  playerTwoName = localStorage.getItem("playerTwoName");
  mode = localStorage.getItem("mode");

  if (winner === null)
    return `
      <div class="flex items-center">
        <div class="m-4 flex flex-col items-center text-2xl font-bold ${
          currentPlayer === "X" ? "text-blue-500" : "text-black"
        }">
          <p>${playerOneName}</p>
          <p>(X)</p>
        </div>

        <div class="m-4 flex flex-col items-center text-2xl">
          <p>vs</p>
        </div>

        <div class="m-4 flex flex-col items-center text-2xl font-bold ${
          currentPlayer === "O" ? "text-red-500" : "text-black"
        }">
          <p>${playerTwoName}</p>
          <p>(O)</p>
        </div>
      </div>
    `;
  else
    return `
      <div class="flex items-center">
        <div class="m-4 flex flex-col items-center">
          <p class="font-bold text-2xl">Game over the winner is 🎊 <span class="text-3xl ${
            currentPlayer === "X" ? "text-blue-500" : "text-red-500"
          }">${winner}</span> 🎊</p>

          <div class="inline-flex mt-3 w-full" role="group">
            <button
              id="returnHome"
              type="button"
              class="mb-2 mx-2 block w-full rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700"
            >
              Back home
            </button>
          
            <button
              id="playAgain"
              type="button"
              class="mb-2 mx-2 block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            >
              Play again
            </button>
          </div>
        </div>
      </div>
    `;
};

export default GamePlayHeader;
