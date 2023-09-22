import GamePlayHeader from "../components/GamePlayHeader";
import TicTacToeBoard from "../components/TicTacToeBoard";

const GamePlayLayout = () => {
  return `
    <div class="bg-gray-200 w-full px-16 pb-10 md:px-0 min-h-screen flex flex-col items-center justify-center">
      ${GamePlayHeader()}
      ${TicTacToeBoard()}
    </div>
  `;
};

export default GamePlayLayout;
