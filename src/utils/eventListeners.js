import router from "../router";
import {
  handleChangePlayerOneName,
  handleChangePlayerTwoName,
  handleClickStartButton,
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
};

export default setupEventListeners;
