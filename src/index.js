import { createHomePage } from './home';
import { createMenu } from './menu'
import { createContactPage } from './contact';
import './style.css';

const content = document.getElementById('content');
const home = document.getElementById('home');
const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

content.appendChild(createHomePage());

home.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(createHomePage());
})

menu.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(createMenu());
})

contact.addEventListener('click', () => {
    content.innerHTML = '';
    content.appendChild(createContactPage());
})

