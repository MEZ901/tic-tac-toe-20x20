import PlayerSetupLayout from "./layouts/PlayerSetupLayout";
import GamePlayLayout from "./layouts/GamePlayLayout";
import PageNotFound from "./errors/PageNotFound";
import setupEventListeners from "./utils/eventListeners";
import HistoryLayout from "./layouts/HistoryLayout";

const router = () => {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      document.querySelector("#container").innerHTML = PlayerSetupLayout();
      break;
    case "/game-play":
      document.querySelector("#container").innerHTML = GamePlayLayout();
      break;
    case "/history":
      document.querySelector("#container").innerHTML = HistoryLayout();
      break;
    default:
      document.querySelector("#container").innerHTML = PageNotFound();
      break;
  }

  setupEventListeners();
};

export default router;
