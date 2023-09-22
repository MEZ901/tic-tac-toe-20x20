const GamePlayHeader = () => {
  const playerOneName = localStorage.getItem("playerOneName");
  const playerTwoName = localStorage.getItem("playerTwoName");
  return `
    <div>
        <h1
            class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl mx-auto text-center lg:py-16 lg:px-12 flex flex-col sm:flex-row"
        >
            ${playerOneName}
            <img class="mx-3" src="./src/assets/vs-thumbnail.png" alt="Vs" width="70" class="mx-auto" />
            ${playerTwoName}
        </h1>
    </div>
  `;
};

export default GamePlayHeader;
