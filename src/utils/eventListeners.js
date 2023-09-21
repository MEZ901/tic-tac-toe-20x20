import router from "../router";
import {
  handelClick,
  handleChangePlayerOneName,
  handleChangePlayerTwoName,
} from "./functions";

window.addEventListener("popstate", router);

document.getElementById("button")?.addEventListener("click", handelClick);

document
  .getElementById("playerOneName")
  ?.addEventListener("change", handleChangePlayerOneName);

document
  .getElementById("playerTwoName")
  ?.addEventListener("change", handleChangePlayerTwoName);
