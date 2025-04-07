const menuNav = document.querySelector('.header-nav-list');
const buttonMenuNav = document.querySelector('.header-nav-menu-btn');
const menuLinks = document.querySelectorAll('.header-nav-list a[href^="#"]');

const modalWindow = document.querySelector('.mobile-menu');
const buttonModalWindow = document.querySelector('.mobile-menu-close-btn');
const buttonOpenModalWindow = document.querySelector('.header-burger-btn');
const mobileNavLinks = document.querySelectorAll(
  '.mobile-nav-list a[href^="#"]'
);
const orderProjectBtn = document.querySelector('.order-project-btn');

buttonMenuNav.addEventListener('click', openNavList);

buttonModalWindow.addEventListener('click', closeModalWindow);
buttonOpenModalWindow.addEventListener('click', onShowModalWindow);

//#region Nav Menu
function openNavList() {
  menuNav.classList.toggle('visualy-hidden');
}

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuNav.classList.add('visualy-hidden');
  });
});
//#endregion Nav Menu

//#region Modal window
function onShowModalWindow() {
  modalWindow.classList.add('is-open');
  document.body.classList.add('no-scroll');
}

function closeModalWindow() {
  modalWindow.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    closeModalWindow();
  });
});

orderProjectBtn.addEventListener('click', () => {
  closeModalWindow();
});
//#endregion Modal window
