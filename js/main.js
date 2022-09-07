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

