import router from "../router";
import {
  activeOnePlayerMode,
  activeTwoPlayersMode,
  handleCellClick,
  handleChangePlayerOneName,
  handleChangePlayerTwoName,
  handleClickHistoryButton,
  handleClickStartButton,
  playAgain,
  returnHome,
} from "./functions";

const setupEventListeners = () => {
  window.addEventListener("popstate", router);

  document.getElementById("returnHome")?.addEventListener("click", returnHome);

  document
    .getElementById("twoPlayersMode")
    ?.addEventListener("click", activeTwoPlayersMode);

  document
    .getElementById("onePlayerMode")
    ?.addEventListener("click", activeOnePlayerMode);

  document
    .getElementById("playerOneName")
    ?.addEventListener("change", handleChangePlayerOneName);

  document
    .getElementById("playerTwoName")
    ?.addEventListener("change", handleChangePlayerTwoName);

  document
    .getElementById("startButton")
    ?.addEventListener("click", handleClickStartButton);

  document
    .getElementById("HistoryButton")
    ?.addEventListener("click", handleClickHistoryButton);

  document.querySelectorAll(".cell")?.forEach((cell) => {
    cell.addEventListener("click", handleCellClick);
  });

  document.getElementById("playAgain")?.addEventListener("click", playAgain);
};

export default setupEventListeners;
