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

//#region Scroll control
function smoothScroll(target, duration) {
  const start = window.pageYOffset;
  const targetPosition = document.querySelector(target).offsetTop;
  const distance = targetPosition - start;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, start + distance * easeInOutQuad(progress));

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    smoothScroll(this.getAttribute('href'), 1700);
  });
});
//#endregion Scroll control
