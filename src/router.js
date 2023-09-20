import LoginLayout from "./layouts/LoginLayout";

const router = () => {
  const path = window.location.pathname;
  console.log(path);

  switch (path) {
    case "/":
      document.querySelector("#container").innerHTML = `
        ${LoginLayout()}
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
