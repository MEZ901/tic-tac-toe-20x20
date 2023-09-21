import PlayerSetup from "../components/PlayerSetup";

const PlayerSetupLayout = () => {
  return `
    <div class="bg-gray-200 w-full px-16 md:px-0 h-screen flex items-center justify-center">
      ${PlayerSetup()}
    </div>
  `;
};

export default PlayerSetupLayout;
