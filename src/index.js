import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js"
import "./style.css"
const ScreenController = function () {
    const content = document.getElementById("content");
    const updateScreen = () => {
        content.textContent = "";
    };
    loadHome();
    document.getElementById("home").onclick = () => {
        updateScreen();
        loadHome();
    };
    document.getElementById("menu").onclick = () => {
        updateScreen();
        loadMenu();
    };
    document.getElementById("contact").onclick = () => {
        updateScreen();
        loadContact();
    };
    

    return { updateScreen };
};
ScreenController();