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

        const name = document.createElement("p");
        name.textContent = person.name;
        const job = document.createElement("p");
        job.textContent = person.job;
        const tel = document.createElement("p");
        tel.textContent = person.tel;
        const email = document.createElement("p");
        email.textContent = person.email;
        div_contacts.append(name, job, tel, email);
        return div_contacts;
    }
    const showContact = () => {
        const headline = document.createElement('h1');
        headline.textContent = "Contact Us";
        content.appendChild(headline);
        contacts.forEach(person => {
            const new_contact = createContact(person);
            content.appendChild(new_contact);
        });
    };

    showContact();
};
export default loadContact;