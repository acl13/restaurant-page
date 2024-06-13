function createMenu() {
    const menu = document.createElement('div');
    const ogTitle = document.createElement('h2');
    const ogDescription = document.createElement('p');
    const nachoTitle = document.createElement('h2');
    const nachoDescription = document.createElement('p');
    const bbqTitle = document.createElement('h2');
    const bbqDescription = document.createElement('p');
    const sweetTitle = document.createElement('h2');
    const sweetDescription = document.createElement('p');
    
    ogTitle.textContent = 'The O. G.';
    ogDescription.textContent = 'Our crispy tots covered in bacon and cheddar cheese, topped with sour cream and green onions';
    nachoTitle.textContent = `Nacho Mama's Tots`;
    nachoDescription.textContent = 'Smothered in queso and topped with spicy chorizo, house-made pico de gallo, and jalapenos';
    bbqTitle.textContent = 'BBQ Baddie';
    bbqDescription.textContent = 'Piled high with slow roasted pulled pork, monterey jack cheese, a tangy BBQ sauce, and fried onions';
    sweetTitle.textContent = 'Sweeties';
    sweetDescription.textContent = 'Our fluffy sweet potato tots served with a creamy cinnamon butter';

    menu.appendChild(ogTitle);
    menu.appendChild(ogDescription);
    menu.appendChild(nachoTitle);
    menu.appendChild(nachoDescription);
    menu.appendChild(bbqTitle);
    menu.appendChild(bbqDescription);
    menu.appendChild(sweetTitle);
    menu.appendChild(sweetDescription);

    return menu; 
}

export { createMenu };