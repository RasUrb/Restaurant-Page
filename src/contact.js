import {createDiv, createHeading, createParagraph} from './dom-utils.js';

const loadContact = () => {
    const content = document.getElementById('content');

    const contacts = [{
        name: "Mary",
        job: "Manager",
        tel: "111-111-111",
        email: "example@example.com",
    },
    {
        name: "Chill",
        job: "Chef",
        tel: "154-111-111",
        email: "picaChef@example.com",
    },
    {
        name: "Well",
        job: "Waiter",
        tel: "111-789-111",
        email: "wellWait@example.com",
    },];

    const createContact = (person) => {
        const div_contacts = document.createElement("div");
        div_contacts.classList.add("contact");
        Object.entries(person).forEach(([name, value]) =>{
           div_contacts.appendChild(createParagraph(value));
        });
        return div_contacts;
    };
    const showContact = () => {
        const headline = createHeading("Contact Us");
        content.appendChild(headline);
        contacts.forEach(person => {
            const new_contact = createContact(person);
            content.appendChild(new_contact);
        });
    };

    showContact();
};
export default loadContact;