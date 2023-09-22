import GamePlayHeader from "../components/GamePlayHeader";

const GamePlayLayout = () => {
  return `
    <div class="bg-gray-200 w-full px-16 md:px-0 h-screen flex flex-col items-center justify-center">
      ${GamePlayHeader()}
      <div  class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-8 rounded-lg shadow-2xl">
        hhhhhhhhh
      </div>
    </div>
  `;
};

export default GamePlayLayout;
