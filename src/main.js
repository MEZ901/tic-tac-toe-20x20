import "./index.css";
import router from "./router";

document.querySelector("#app").innerHTML = `
  <div id="container"></div>
`;

router();
