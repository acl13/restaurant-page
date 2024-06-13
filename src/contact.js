function createContactPage() {
    const contact = document.createElement('div');
    const heading = document.createElement('h2');
    const contactInfo = document.createElement('p');

    heading.textContent = `We'd love to hear from you!`;
    contactInfo.textContent = 'For catering requests, menu suggestions, or any other inquiries, please contact us at info@tastytots.com';

    contact.appendChild(heading);
    contact.appendChild(contactInfo);

    return contact;
}

export { createContactPage };