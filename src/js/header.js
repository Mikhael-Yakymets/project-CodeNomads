const menuNav = document.querySelector('.header-nav-list');
const buttonMenuNav = document.querySelector('.header-nav-menu-btn');
const menuLinks = document.querySelectorAll('.header-nav-list a[href^="#"]');

buttonMenuNav.addEventListener('click', openNavList);

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
