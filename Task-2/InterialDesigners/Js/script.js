// Mobile menu toggle
const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});
