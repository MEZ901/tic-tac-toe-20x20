import { validationErrors } from "../../errors/validationErrors";

const OnePlayerForm = () => {
  return `
    <div class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
      <div class="relative w-full lg:w-[85%]">
        <input
          type="text"
          class="${
            validationErrors.playerOneNameError
              ? "border-red-500 text-red-500"
              : "border-neutral-300 text-neutral-700"
          } peer m-0 block h-[58px] w-full rounded border border-solid bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary [&:not(:placeholder-shown)]:pt-[1.625rem]"
          id="playerOneName"
          placeholder="Enter your name"
        />
        <label
          for="playerOneName"
          class="${
            validationErrors.playerOneNameError
              ? "text-red-500"
              : "text-neutral-500"
          } pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none"
        >
          Enter your name
        </label>
        ${
          validationErrors.playerOneNameError
            ? `<p class="text-red-500 text-sm mt-1">${validationErrors.playerOneNameError}</p>`
            : ""
        }
      </div>
    </div>
  `;
};

export default OnePlayerForm;
