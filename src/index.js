console.log('funguju!');

//  Zprovoznění navigace
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

//  Objednávání
// Na tlačíko .order-btn pověste posluchač, který při kliknutí přidá na prvek .drink__cup třídu .drink__cup--selected. Zároveň změní nápis na tlačítku na Zrušit.
const orderBtn = document.querySelector('.order-btn');
const drinkCup = document.querySelector('.drink__cup');
orderBtn.addEventListener('click', () => {
  drinkCup.classList.toggle('drink__cup--selected');
  if (drinkCup.classList.contains('drink__cup--selected')) {
    orderBtn.textContent = 'Zrušit';
  } else {
    orderBtn.textContent = 'Objednat';
  }
});
