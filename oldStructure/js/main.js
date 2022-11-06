const switchMenus = Array.from(document.getElementsByClassName('menu'));
const desktopMenu = document.getElementById('desktopMenu');
const mobileMenu = document.getElementById('mobileMenu');

const switchShoppingCarts = Array.from(document.getElementsByClassName('switchShoppingCart'));
const shoppingCart = document.getElementById('shoppingCart');
const numberOfItems = Array.from(document.getElementsByClassName('numberOfItems'));

const emailMobileMenu = document.getElementById('emailMobileMenu');

const openProduct = Array.from(document.getElementsByClassName('product-img')).concat(Array.from(document.getElementsByClassName('product-details')));
const closeProduct = document.getElementById('close');
const productPanel = document.getElementById('productPanel');
const products = document.getElementById('products');

// Script to open and close the desktop and mobile menu 
switchMenus.forEach((menu) => {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        
        toggleMenu();

        switchProducts();
    });
});

// Script to correct reactions
emailMobileMenu.addEventListener('click', (e) => {
    e.preventDefault();
});

// Script to open and close the shopping cart
switchShoppingCarts.forEach((switchShoppingCart) => {
    switchShoppingCart.addEventListener('click', (e) => {
        toggleShoppingCart();

        switchProducts();
    });
});

// Script to open an close the product details panel 
openProduct.forEach((product) => {
    product.addEventListener('click', (e) => {
        productPanel.classList.remove('hidden');
        shoppingCart.classList.add('hidden');
        desktopMenu.classList.add('hidden');
        mobileMenu.classList.add('hidden');

        switchProducts();
    });
});

closeProduct.addEventListener('click', (e) => {
    productPanel.classList.add('hidden');

    switchProducts();
});

// Script to add the number pf items added in the shopping cart in the shopping cart icon
numberOfItems.forEach((element) => {
    setNumberOfItems(element);
});

// Script to make fixing in the flow of the page
window.addEventListener('resize', (e) => {
    if(e.target.innerWidth > 640) {
        products.classList.remove('hidden');
    } else if(e.target.innerWidth < 641 && (!desktopMenu.classList.contains('hidden') || !shoppingCart.classList.contains('hidden') || !productPanel.classList.contains('hidden'))) {
        products.classList.add('hidden');
    }
});

// Functions
function setNumberOfItems(element) { // Function to set the number of items in the shopping cart icon
    const itemsOfShoppingCart = Array.from(document.getElementsByClassName('item'));
    element.textContent = itemsOfShoppingCart.length.toString();
}

function toggleMenu() {
    desktopMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('hidden');
    shoppingCart.classList.add('hidden');
    productPanel.classList.add('hidden');
}

function toggleShoppingCart() {
    shoppingCart.classList.toggle('hidden');
    desktopMenu.classList.add('hidden');
    mobileMenu.classList.add('hidden');
    productPanel.classList.add('hidden');
}

function switchProducts() {
    if(window.innerWidth < 641 && (!desktopMenu.classList.contains('hidden') || !shoppingCart.classList.contains('hidden') || !productPanel.classList.contains('hidden'))) {
        products.classList.add('hidden');
    } else {
        products.classList.remove('hidden');
    }
}