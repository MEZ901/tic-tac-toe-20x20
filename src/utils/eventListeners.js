import router from "../router";
import {
  handleCellClick,
  handleChangePlayerOneName,
  handleChangePlayerTwoName,
  handleClickStartButton,
  playAgain,
  returnHome,
} from "./functions";

const setupEventListeners = () => {
  window.addEventListener("popstate", router);

  document.getElementById("returnHome")?.addEventListener("click", returnHome);

  document
    .getElementById("playerOneName")
    ?.addEventListener("change", handleChangePlayerOneName);

  document
    .getElementById("playerTwoName")
    ?.addEventListener("change", handleChangePlayerTwoName);

  document
    .getElementById("startButton")
    ?.addEventListener("click", handleClickStartButton);

  document.querySelectorAll(".cell")?.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  document.getElementById("playAgain")?.addEventListener("click", playAgain);
};

export default setupEventListeners;
