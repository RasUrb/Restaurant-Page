import {createDiv, createHeading, createParagraph, create_h3} from './dom-utils.js';
const loadMenu = () => {
    const content = document.getElementById('content');
    const beverages = [
        {
            name: "strawberry lemonade",
            description: "A refreshing drink, with mint and strawberries. Vibrant red and sweetly aromatic.",
            price: 1,
        },
        {
            name: "mint tea",
            description: "Fresh and cooling tea- the perfect way to start the day.",
            price: 2,
        }];
    const sides = [
        {
            name: "Fresh Fruit",
            description: "A fresh fruit, beautifully shaped. Just picked from the market.",
            price: 4
        },
        {
            name: "Cheese platter",
            description: "A four-cheese platter with crackers, fresh fruits, and house-made fruit jam-crafted from market-picked fruit.",
            price: 3,
        },
        {
            name: "Toast and Jam",
            description: "Homemade bread served with raspberry jam",
            price: 2,
        },];
    const mainDishes = [{
        name: "pepperoni pizza",
        description: "Our best pizza, grilled to perfection, topped with plenty pepperoni and melted cheese",
        price: 12
    },
    {
        name: "pancake",
        description: "Big, fluffy pancakes served with fruit jam and maple syrup",
        price: 6
    },
    {
        name: "Fox tail",
        description: "Tender chicken breast pieces in a sweet and sour sauce with steamed rice",
        price: 8
    },
    {
        name: "Chika chik",
        description: "Chicken breast baked with tomatoes and cheese with fresh vegetables",
        price: 9
    }
    ];
    const desserts = [{
        name: "cheese cake",
        description: "A creamy and ultra smooth classic cheesecake with sweet jam.",
        price: 7,
    },
    {
        name: "Cute animal ice cream",
        description: "Cute animal shape ice cream choose from: chocolate, vanilla, mint and strawberry",
        price: 7,
    }
    ];

    const create_h2 = (title) => {
        //const header_div = createDiv();
        const header_title = document.createElement("h2");
        header_title.textContent = title;
        //header_div.appendChild(header_title);
        return header_title;
    };

    const item_format = (item) => {
        const new_div = createDiv("menu-item");
        const name = create_h3(item.name)
        const description = createParagraph(item.description);
        const price = createParagraph(`${item.price} €`);
        new_div.append(name,description,price);
        return new_div;
    };
    const createMenu = () =>{
        const menuData = {
        "Beverages": beverages,
        "Sides": sides,
        "Main Dishes": mainDishes,
        "Desserts": desserts,
        }  

        Object.entries(menuData).forEach(([categoryName, items])=>{
            const div = createDiv(`menu-container`)
            const ul = document.createElement("ul");
            //ul.classList.add("")
            const subHeading = create_h2(categoryName);
            div.appendChild(subHeading);
        items.forEach((item)=>{
            const li = document.createElement("li");
            const new_item = item_format(item);
            li.appendChild(new_item);
            ul.appendChild(li);
        })
            div.appendChild(ul);
            content.appendChild(div);
        })
    }
    const showMenu =  () => {
        const headline = createHeading("Menu");
        content.appendChild(headline);
        createMenu()
    };

    return {show: showMenu}
};
export default loadMenu;