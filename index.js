const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');
const container = document.querySelector('.container');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');

function handleToggleMenu() {
  menu.classList.toggle('open-menu');
  container.classList.toggle('menu-overlay');
  document.body.classList.toggle('turn-off-scroll');
}

menuNav.addEventListener('click', handleToggleMenu);
openMenuButton.addEventListener('click', handleToggleMenu);
closeMenuButton.addEventListener('click', handleToggleMenu);
