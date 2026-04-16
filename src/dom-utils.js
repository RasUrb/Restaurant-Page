const createDiv = (class_name) => {
        const new_div = document.createElement('div');
        if (class_name) {
            new_div.classList.add(class_name);
        };
        return new_div;
    };
const createHeading = (heading) => {
        const heading_div = createDiv("heading");
        const heading_h1 = document.createElement("h1");
        heading_h1.textContent = heading;
        heading_div.appendChild(heading_h1);
        return heading_div;
    };
const createParagraph = (text, addClass) => {
        const p = document.createElement('p');
        p.classList.add(addClass);
        p.textContent = text;
        return p;
    };
export {createDiv, createHeading, createParagraph}