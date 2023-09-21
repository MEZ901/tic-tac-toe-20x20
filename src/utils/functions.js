import {
  playerOneNameError,
  playerTwoNameError,
} from "../errors/validationErrors";
import router from "../router";
import setupEventListeners from "./eventListeners";

export const handelClick = () => {
  history.pushState(null, null, "/about");
  window.dispatchEvent(new Event("popstate"));
};

export const returnHome = () => {
  updateURL("/");
};

export const handleChangePlayerOneName = (e) => {
  localStorage.setItem("playerOneName", e.target.value);
};

export const handleChangePlayerTwoName = (e) => {
  localStorage.setItem("playerTwoName", e.target.value);
};

export const handleClickStartButton = () => {
  const playerOneName = localStorage.getItem("playerOneName");
  const playerTwoName = localStorage.getItem("playerTwoName");

  playerOneName === (undefined || null || "") &&
    (playerOneNameError = "This field is required");

  playerTwoName === (undefined || null || "") &&
    (playerTwoNameError = "This field is required");

  updateURL("/game-play");
};

function updateURL(newURL) {
  const currentState = history.state || {};

  const newState = { ...currentState, timestamp: Date.now() };

  history.pushState(newState, null, newURL);
  window.dispatchEvent(new Event("popstate"));
}
