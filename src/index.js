import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js"
import "./style.css"
const ScreenController = function () {
    let page = loadContact();
    const content = document.getElementById("content");

    document.getElementById("home").onclick = () => {
        updateScreen();
        page = loadHome();
    };
    document.getElementById("menu").onclick = () => {
        updateScreen();
        page = loadMenu();
    };
    document.getElementById("contact").onclick = () => {
        updateScreen();
        page = loadContact();
    };
    const updateScreen = () => {
        content.textContent = "";
    };

    return { updateScreen };
};
ScreenController();