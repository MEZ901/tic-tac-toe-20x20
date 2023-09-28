import { validationErrors } from "../../errors/validationErrors";

const PlayerVsPlayerForm = () => {
  const playerOneName = localStorage.getItem("playerOneName");
  const playerTwoName = localStorage.getItem("playerTwoName");
  return `
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
  `;
};

export default PlayerVsPlayerForm;
