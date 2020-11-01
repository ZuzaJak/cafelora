console.log('funguju!');
const navBtn = document.querySelector('#nav-btn');
navBtn.addEventListener('click', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('nav-closed');
});
