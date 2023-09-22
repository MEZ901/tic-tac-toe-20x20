const TicTacToeBoard = () => {
  const boardSize = 20;
  let boardHTML = "";

  for (let i = 1; i <= boardSize; i++) {
    boardHTML += '<div class="flex">';
    for (let j = 1; j <= boardSize; j++) {
      boardHTML += `
        <div
          class="cell w-8 h-8 border border-gray-300 flex items-center justify-center cursor-pointer"
          data-row="${i}"
          data-col="${j}"
        >
          <!-- You can add your X or O here -->
        </div>
      `;
    }
    boardHTML += "</div>";
  }

  return `
    <div class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-8 rounded-lg shadow-2xl">
        ${boardHTML}
    </div>
  `;
};

export default TicTacToeBoard;
