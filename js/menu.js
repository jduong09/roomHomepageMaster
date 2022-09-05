document.addEventListener('DOMContentLoaded', () => {
  const menuHamburger = document.getElementById('menu-hamburger');
  const menuClose = document.getElementById('menu-close');
  const menuList = document.querySelector('nav ul');
  const navElement = document.querySelector('nav');
  const backgroundOverlay = document.getElementById('background-overlay');

  menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.add('hide');
    menuClose.classList.remove('hide');
    menuList.classList.remove('hide');
    navElement.classList.add('open');
    backgroundOverlay.classList.remove('hide');
  });

  menuClose.addEventListener('click', () => {
    menuHamburger.classList.remove('hide');
    menuClose.classList.add('hide');
    menuList.classList.add('hide');
    navElement.classList.remove('open');
    backgroundOverlay.classList.add('hide');
  });
});