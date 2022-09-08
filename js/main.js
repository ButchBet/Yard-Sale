const switchMenus = Array.from(document.getElementsByClassName('menu'));
const desktopMenu = document.getElementById('desktopMenu');
const mobileMenu = document.getElementById('mobileMenu');
const switchShoppingCarts = Array.from(document.getElementsByClassName('switchShoppingCart'));
const shoppingCart = document.getElementById('shoppingCart');
const numberOfItems = Array.from(document.getElementsByClassName('numberOfItems'));
const emailMobileMenu = document.getElementById('emailMobileMenu');

// Script to open and close the desktop and mobile menu 
switchMenus.forEach((menu) => {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        desktopMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('hidden');
        shoppingCart.classList.add('hidden');
    });
})

// Script to correct reactions
emailMobileMenu.addEventListener('click', (e) => {
    e.preventDefault();
})

// Script to open and close the shopping cart
switchShoppingCarts.forEach((switchShoppingCart) => {
    switchShoppingCart.addEventListener('click', (e) => {
        shoppingCart.classList.toggle('hidden');
        desktopMenu.classList.add('hidden');
        mobileMenu.classList.add('hidden');
    });
})

// Script to add the number pf items added in the shopping cart in the shopping cart icon
numberOfItems.forEach((element) => {
    setNumberOfItems(element);
});

function setNumberOfItems(element) {
    const itemsOfShoppingCart = Array.from(document.getElementsByClassName('item'));
    element.textContent = itemsOfShoppingCart.length.toString();
}