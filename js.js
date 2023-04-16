const pageTop = document.querySelector('.page__top');

document.onscroll = function () {
    const scrollHeight = window.scrollY

    if (scrollHeight > 700) {
        pageTop.style.display = 'inline-block';
    } else {
        pageTop.style.display = 'none';
    }
}

const header = document.getElementById('header');
const mobileMenu = document.getElementById('menu__icon');
const headerHeight = header.clientHeight

// đóng mở mobile menu 
mobileMenu.onclick = function () {
    const isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

const menuItems = document.querySelectorAll('.menu__item')
for (var i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        header.style.height = null;
    }
}

