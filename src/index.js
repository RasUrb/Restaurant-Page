import loadHome from "./home.js"
import loadMenu from "./menu.js"
import loadContact from "./contact.js"
import clockIcon from "./img/clock.svg";
import facebookIcon from "./img/facebook.svg";
import instagramIcon from "./img/instagram.svg";
//import map_pinIcon from "./map-pin.svg";
import {createDiv, create_h3} from "./dom-utils.js"
 

import "./style.css"

const ScreenController = function () {
    const content = document.getElementById("content");

    const loadFooter = () =>{
        const icons = [clockIcon, facebookIcon, instagramIcon];
        const footer = document.createElement("footer");
        const header3 = create_h3("Find: ");
        const findHolder = createDiv("find");
        footer.appendChild(header3);
        icons.forEach(icon=>{
            const image = document.createElement("img");
            image.src = icon;
            findHolder.appendChild(image);
        });
        footer.appendChild(findHolder);
        document.body.appendChild(footer);
    };
    const renderPage = (moduleLoadFunction)=>{
          content.textContent = "";
          const module = moduleLoadFunction();
          module.show();
          //loadFooter();
    }
    document.getElementById("home").onclick = () => renderPage(loadHome);
    document.getElementById("menu").onclick = () =>renderPage(loadMenu);
    document.getElementById("contact").onclick = () => renderPage(loadContact);
    renderPage(loadHome);
    loadFooter();

};
ScreenController();