// Script to open an close the desktop menu 
const shoppingCart = document.getElementById('shoppingCart');
const desktopMenu = document.getElementById('desktopMenu');

shoppingCart.addEventListener('click', (e) => {
    desktopMenu.classList.toggle('hidden');
})