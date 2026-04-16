import {createDiv, createHeading, createParagraph} from './dom-utils.js';
const loadHome = () => {
    const content = document.getElementById('content');
    const title= "Bite animal food restaurant.";
    const home_content = {
        
        review: "Best pizza In The City! The pizza is so  delicious that the fox tried to steal it, but nothing stopped the bear. Best day ever.",
        hours: {
            monday: "6-19",
            tuesday: "6-19",
            wednesday: "6-19",
            thursday: "6-19",
            friday: "6-22",
            saturday: "8-20",
            sunday: "8-20"
        },
        location: "87 pica pizza row, Heat Oven, Dough",
    };

    const createParagraph = (text, addClass) => {
        const p = document.createElement('p');
        p.classList.add(addClass)
        p.textContent = text;
        return p;
    };


    const info_format = (class_name, text) => {
        const new_div = createDiv("info-" + class_name);
        const new_header3 = document.createElement("h3");
        new_header3.classList.add(class_name);
        new_header3.textContent = class_name;

        if (class_name != "hours") {

            const new_p = createParagraph(text, class_name);
            new_div.append(new_header3, new_p);
            return new_div;
        }
        else {
            new_div.appendChild(new_header3);

            return hours_format(new_div);
        }
    };
    const hours_format = (div_container) => {
        Object.entries(home_content.hours).forEach(([day, time])=>{
            const text = `${day}: ${time}`;
            const p = createParagraph(text, "hour-row");
            div_container.appendChild(p);
        })
        return div_container;
    }
    const createHome = () =>{
        Object.entries(home_content).forEach(([name, text])=>{
            const div_container = info_format(name,text);
            content.appendChild(div_container);}
        );

    }
    const showHome = () => {
        const headline = createHeading(title);
        content.appendChild(headline);
        createHome();  
    };

    showHome();
};

export default loadHome;