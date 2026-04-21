import { createDiv, createHeading, create_h3, createParagraph } from './dom-utils.js';

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
        const div_contacts = createDiv("contact-card");

        Object.entries(person).forEach(([name, value]) => {
            console.log(name)
            if (name === "name") {
                div_contacts.appendChild(create_h3(value))
            }
            else {
                div_contacts.appendChild(createParagraph(value));
            }
        });
        return div_contacts;
    };
    const showContact = () => {
        const headline = createHeading("Contact Us");
        const contactList = document.createElement("ul");
        contactList.classList.add("contact-container")
        content.appendChild(headline);
        contacts.forEach(person => {
            const contactObject = document.createElement("li")
            const new_contact = createContact(person);
            contactObject.appendChild(new_contact);
            contactList.appendChild(contactObject);
        });
        content.appendChild(contactList);
    };

    return { show: showContact }
};
export default loadContact;