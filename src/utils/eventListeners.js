import router from "../router";
import { handelClick } from "./functions";

document.getElementById("button").addEventListener("click", handelClick);

window.addEventListener("popstate", router);
