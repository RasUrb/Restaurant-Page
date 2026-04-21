import {createDiv, createHeading, createParagraph, create_h3} from './dom-utils.js';
const loadHome = function () {
    const content = document.getElementById('content');
    const title= "Bite animal food restaurant";
    const home_content = {
        
        review: "Best pizza In The City! The pizza is so  delicious that the fox tried to steal it, but bear stopped it from stealing. Best day ever.",
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

    const info_format = (name, text) => {
        const new_div = createDiv("info-" + name);
        const new_header3 = create_h3(name, name);

        if (name != "hours") {

            const new_p = createParagraph(text, name);
            new_div.append(new_header3, new_p);
            return new_div;
        }
        else {
            new_div.appendChild(new_header3);

            return hours_format(new_div);
        }
    };
    const hours_format = (div_container) => {
        const ul = document.createElement("ul");
        
        Object.entries(home_content.hours).forEach(([day, time])=>{
            
            const text = `${day}: ${time}`;
            const li = document.createElement("li");
            li.textContent = text;
            ul.appendChild(li);
        });
        div_container.appendChild(ul);
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


    return {show: showHome}
};

export default loadHome;