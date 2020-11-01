console.log('funguju!');
const navBtn = document.querySelector('#nav-btn');
const nav = document.querySelector('nav');
navBtn.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});
const navItems = document.querySelectorAll('#nav-item');
navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    nav.classList.add('nav-closed');
  });
});
