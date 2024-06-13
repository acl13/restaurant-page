// //import Tots from './tater-tots.jpeg';

function createHomePage() {
    const element = document.createElement('div');
    const title = document.createElement('h1');
    const description = document.createElement('p');

    title.textContent = 'Tasty Tots';
    description.textContent = `Get ready to experience the tastiest tater tots you've ever had! Our tots come in a variety of flavors, sure to please every palate.`

 //   const img = new Image();
  //  img.src = Tots;

    element.appendChild(title);
    element.appendChild(description);
  //  element.appendChild(img);

    return element;

}

export { createHomePage }; 
