import {createDiv, createHeading, createParagraph} from './dom-utils.js';
const loadMenu = () => {
    const content = document.getElementById('content');
    const beverages = [
        {
            name: "strawberry lemonade",
            description: "A refreshing drink, with mint and strawberries. Red and sweetly fragrant.",
            price: 1,
        },
        {
            name: "mint tea",
            description: "Fresh and cooling tea. nice way to start day off right!",
            price: 2,
        }];
    const sides = [
        {
            name: "Fresh Fruit",
            description: "A fresh fruit, with cute forms. Just pick from market.",
            price: 4
        },
        {
            name: "Cheese platter",
            description: "4 cheese plater with crackers, fruits and fruit jam. Fruit jam made from pick fruit from the market.",
            price: 3,
        },
        {
            name: "Toast and Jam",
            description: "Homemade bread with raspberry jam",
            price: 2,
        },];
    const mainDishes = [{
        name: "pepperoni pizza",
        description: "Best pizza made in grill. With lots pepperoni and cheese",
        price: 12
    },
    {
        name: "pancake",
        description: "Big and fluffy pancakes, with fruit jam and maple syrup",
        price: 6
    },
    {
        name: "Fox tail",
        description: "Chicken breast pieces with sweet and sour sauce and rice",
        price: 8
    },
    {
        name: "Chika chik",
        description: "chicken breast with tomatoes and cheese with fresh vegetables",
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
        const header_div = createDiv();
        const header_title = document.createElement("h2");
        header_title.textContent = title;
        header_div.appendChild(header_title);
        return header_div;
    };
    const create_h3 = (title) => {
        const header_div = createDiv();
        const header_title = document.createElement("h3");
        header_title.textContent = title;
        header_div.appendChild(header_title);
        return header_div;
    };

    const item_format = (item) => {
        const new_div = createDiv();
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
            const subHeading = create_h2(categoryName);
            content.appendChild(subHeading);
        items.forEach((item)=>{
            const new_item = item_format(item);
            content.appendChild(new_item);
        })
        })
    }
    const showMenu = () => {
        const headline = createHeading("Menu");
        content.appendChild(headline);
        createMenu()
    };
    showMenu();
};
export default loadMenu;