import { createHomePage } from './home';
import './style.css';

const content = document.getElementById('content');
content.appendChild(createHomePage());