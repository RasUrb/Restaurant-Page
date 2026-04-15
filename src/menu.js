
const loadMenu = () => {
    const content = document.getElementById('content');
    
    const createParagraph = (text)=>{
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    };

    const headline = document.createElement('h1');
    headline.textContent = "Menu";

    content.appendChild(headline);
};
export default loadMenu;