const loadHome = () =>{
    const content = document.getElementById('content');
    
    const createParagraph = (text)=>{
        const p = document.createElement('p');
        p.textContent = text;
        return p;
    };

    const headline = document.createElement('h1');
    headline.textContent = "Best Pica In The City";

    content.appendChild(headline);
    content.appendChild(createParagraph("Hand made pica from the oven!!!"));

};

export default loadHome;