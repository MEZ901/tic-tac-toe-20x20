import { validationErrors } from "../errors/validationErrors";

const PlayerSetup = () => {
  const playerOneName = localStorage.getItem("playerOneName");
  const playerTwoName = localStorage.getItem("playerTwoName");

  return `
    <section class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-8 rounded-lg shadow-2xl">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Tic Tac Toe 20x20</h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Enter the players names to start</p>
          <div class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">

            <div class="relative">
              <input
                type="text"
                class="${
                  validationErrors.playerOneNameError
                    ? "border-red-500 text-red-500"
                    : "border-neutral-300 text-neutral-700"
                } peer m-0 block h-[58px] w-full rounded border border-solid bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="playerOneName"
                placeholder="Player one"
                ${playerOneName && `value = ${playerOneName}`}
              />
              <label
                for="playerOneName"
                class="${
                  validationErrors.playerOneNameError
                    ? "text-red-500"
                    : "text-neutral-500"
                } pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
              >
                Player one
              </label>
              ${
                validationErrors.playerOneNameError
                  ? `<p class="text-red-500 text-sm mt-1">${validationErrors.playerOneNameError}</p>`
                  : ""
              }
            </div>

            <img src="./src/assets/vs-thumbnail.png" alt="Vs" width="70" class="mx-auto" />

            <div class="relative mb-3">
                <input
                  type="text"
                  class="peer m-0 block h-[58px] w-full rounded border border-solid ${
                    validationErrors.playerTwoNameError
                      ? "border-red-500 text-red-500"
                      : "border-neutral-300 text-neutral-700"
                  } bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pt-[1.625rem]"
                  id="playerTwoName"
                  placeholder="Player two"
                  ${playerTwoName && `value = ${playerTwoName}`}
                />
                <label
                  for="playerTwoName"
                  class="${
                    validationErrors.playerTwoNameError
                      ? "text-red-500"
                      : "text-neutral-500"
                  } pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
                >
                  Player two
                </label>
                ${
                  validationErrors.playerTwoNameError
                    ? `<p class="text-red-500 text-sm mt-1">${validationErrors.playerTwoNameError}</p>`
                    : ""
                }
            </div>
          </div>
          <button
            type="button"
            id="startButton"
            data-te-ripple-init
            data-te-ripple-color="light"
            class="inline-block w-full lg:w-[85%] rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Start
          </button>
      </div>
    </section>
  `;
};

export default PlayerSetup;
