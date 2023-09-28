import TwoPlayersForm from "./TwoPlayersForm";
import OnePlayerForm from "./OnePlayerForm";
import SelectMode from "./SelectMode";

const PlayerSetup = () => {
  let mode = localStorage.getItem("mode");
  return `
    <section class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-8 rounded-lg shadow-2xl">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Tic Tac Toe 20x20</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Play now and have some fun!</p>

        ${
          mode === "twoPlayers"
            ? TwoPlayersForm()
            : mode === "onePlayer"
            ? OnePlayerForm()
            : SelectMode()
        }

        ${
          mode === "twoPlayers" || mode === "onePlayer"
            ? `
              <button
                type="button"
                id="startButton"
                data-te-ripple-init
                data-te-ripple-color="light"
                class="inline-block w-full lg:w-[85%] rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              >
                Start
              </button>
            `
            : ""
        }
        <button
          type="button"
          id="HistoryButton"
          class="m-2 text-primary uppercase font-light text-sm"
        >
          See history
        </button>
      </div>
    </section>
  `;
};

export default PlayerSetup;
