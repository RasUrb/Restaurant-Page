const addClass = (holder, name) =>{
    if (name) {
            holder.classList.add(name);
           // return holder;
        };
    
}
// const createHtmlTag = (tag, text) =>{
//     const newTag =document.createElement(tag)
//     return newTag;

// }
const createDiv = (className) => {
        const div = document.createElement('div');
        if (className) {
            div.classList.add(className);
        };
        return div;
    };
const createHeading = (heading) => {
        const heading_div = createDiv("heading");
        const heading_h1 = document.createElement("h1");
        heading_h1.textContent = heading;
        heading_div.appendChild(heading_h1);
        return heading_div;
    };

const create_h3 = (title, className) => {
        const header_title = document.createElement("h3");
        header_title.textContent = title;
        addClass(header_title, className);

        return header_title;
    };

const createParagraph = (text, className) => {
        const p = document.createElement('p');
        addClass(p, className);
        // p.classList.add(className);
        p.textContent = text;
        return p;
    };
export {createDiv, createHeading, create_h3, createParagraph}