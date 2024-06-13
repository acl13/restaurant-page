import Img from './tater-tots.jpeg';

function createHomePage() {
    const element = document.createElement('div');
    const title = document.createElement('h1');
    const description = document.createElement('p');

    title.textContent = 'Tasty Tots';
    description.textContent = `Get ready to experience the tastiest tater tots you've ever had! Our tots come in a variety of flavors, sure to please every palate.`

    const tots = new Image();
    tots.src = Img;

    element.appendChild(title);
    element.appendChild(description);
     element.appendChild(tots);

    return element;

}

export { createHomePage }; 
