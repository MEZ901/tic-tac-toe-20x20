import PlayerSetupLayout from "./layouts/PlayerSetupLayout";

const router = () => {
  const path = window.location.pathname;

  switch (path) {
    case "/":
      document.querySelector("#container").innerHTML = `
        ${PlayerSetupLayout()}
      `;
      break;
    case "/about":
      document.querySelector("#container").innerHTML = `
        <h1>about</h1>
      `;
      break;
    default:
      document.querySelector("#container").innerHTML = `
        <h1>Not Found</h1>
      `;
      break;
  }
};

export default router;
