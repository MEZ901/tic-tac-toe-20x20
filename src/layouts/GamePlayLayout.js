import DangerAlert from "../components/common/DangerAlert";
import GamePlayHeader from "../components/gamePlay/GamePlayHeader";
import TicTacToeBoard from "../components/gamePlay/TicTacToeBoard";
import { validationErrors } from "../errors/validationErrors";

const GamePlayLayout = () => {
  return `
    <div class="bg-gray-200 w-full px-16 pb-10 md:px-0 min-h-screen flex flex-col items-center justify-center">
      ${GamePlayHeader()}
      ${TicTacToeBoard()}

      ${DangerAlert(
        "Invalid choice, the cell is not empty!",
        validationErrors.cellNotEmpty
      )}
    </div>
  `;
};

export default GamePlayLayout;
