// Script to open and close the desktop and mobile menu 
const switchMenus = Array.from(document.getElementsByClassName('menu'));
const desktopMenu = document.getElementById('desktopMenu');
const mobileMenu = document.getElementById('mobileMenu');

switchMenus.forEach((menu) => {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        desktopMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('hidden');
    });
})

// Script to correct reactions
const emailMobileMenu = document.getElementById('emailMobileMenu');

emailMobileMenu.addEventListener('click', (e) => {
    e.preventDefault();
})


// Script to open and close the shopping cart
const switchShoppingCarts = Array.from(document.getElementsByClassName('switchShoppingCart'));
const shoppingCart = document.getElementById('shoppingCart');

switchShoppingCarts.forEach((switchShoppingCart) => {
    switchShoppingCart.addEventListener('click', (e) => {
        shoppingCart.classList.toggle('hidden');
    });
})

// Script to add the number pf items added in the shopping cart in the shopping cart icon
const numberOfItems = Array.from(document.getElementsByClassName('numberOfItems'));

numberOfItems.forEach((element) => {
    setNumberOfItems(element);
});


function setNumberOfItems(element) {
    const itemsOfShoppingCart = Array.from(document.getElementsByClassName('item'));
    element.textContent = itemsOfShoppingCart.length.toString();
}