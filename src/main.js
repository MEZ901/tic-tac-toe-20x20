import "./index.css";
import router from "./router";
import setupEventListeners from "./utils/eventListeners";

document.querySelector("#app").innerHTML = `
  <div id="container"></div>
`;

router();
