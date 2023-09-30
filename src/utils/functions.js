import { validationErrors } from "../errors/validationErrors";
import router from "../router";
import {
  checkWin,
  isBoardFull,
  isCellEmpty,
  makeMove,
  resetGame,
  setHistory,
  switchCurrentPlayer,
} from "../features/gameLogic";
import { computerMove } from "../features/onePlayerMode";
import { currentPlayer, setWinner } from "../features/gameState";
import {
  playerOneName,
  playerTwoName,
} from "../components/gamePlay/GamePlayHeader";

export const returnHome = () => {
  resetGame();
  localStorage.setItem("playerOneName", "");
  localStorage.setItem("playerTwoName", "");
  localStorage.setItem("mode", "");

  updateURL("/");
};

export const activeTwoPlayersMode = () => {
  localStorage.setItem("mode", "twoPlayers");
  router();
};

export const activeOnePlayerMode = () => {
  localStorage.setItem("mode", "onePlayer");
  router();
};

export const playAgain = () => {
  resetGame();
  router();
};

export const handleChangePlayerOneName = (e) => {
  localStorage.setItem("playerOneName", e.target.value);
  validationErrors.playerOneNameError =
    e.target.value === "" ? "This field is required" : null;
};

export const handleChangePlayerTwoName = (e) => {
  localStorage.setItem("playerTwoName", e.target.value);
  validationErrors.playerTwoNameError =
    e.target.value === "" ? "This field is required" : null;
};

export const handleClickStartButton = () => {
  const mode = localStorage.getItem("mode");
  if (mode === "onePlayer") localStorage.setItem("playerTwoName", "computer");

  const playerOneName = localStorage.getItem("playerOneName");
  const playerTwoName = localStorage.getItem("playerTwoName");

  if (
    playerOneName === undefined ||
    playerOneName === null ||
    playerOneName === "" ||
    playerTwoName === undefined ||
    playerTwoName === null ||
    playerTwoName === ""
  ) {
    if (
      playerOneName === undefined ||
      playerOneName === null ||
      playerOneName === ""
    ) {
      validationErrors.playerOneNameError = "This field is required";
    } else {
      validationErrors.playerOneNameError = null;
    }

    if (
      playerTwoName === undefined ||
      playerTwoName === null ||
      playerTwoName === ""
    ) {
      validationErrors.playerTwoNameError = "This field is required";
    } else {
      validationErrors.playerTwoNameError = null;
    }

    router();
    return;
  }

  validationErrors.playerOneNameError = null;
  validationErrors.playerTwoNameError = null;

  updateURL("/game-play");
};

export const handleClickHistoryButton = () => {
  updateURL("/history");
};

export const handleCellClick = (e) => {
  const mode = localStorage.getItem("mode");
  const row = parseInt(e.target.dataset.row);
  const col = parseInt(e.target.dataset.col);

  if (isCellEmpty(row, col)) makeMove(row, col);
  else {
    validationErrors.cellNotEmpty = true;
    router();

    setTimeout(() => {
      validationErrors.cellNotEmpty = false;
      router();
    }, 2000);

    return;
  }

  if (checkWin(row, col)) {
    setWinner(currentPlayer() === "X" ? playerOneName : playerTwoName);
    setHistory();
    console.log(`The winner is ${currentPlayer()}`);
  } else if (isBoardFull()) {
    console.log("the board is full");
  } else {
    switchCurrentPlayer();
    if (mode === "onePlayer") {
      computerMove(row, col);
    }
  }

  router();
};

const updateURL = (newURL) => {
  const currentState = history.state || {};

  const newState = { ...currentState, timestamp: Date.now() };

  history.pushState(newState, null, newURL);

  window.dispatchEvent(new Event("popstate"));
};
