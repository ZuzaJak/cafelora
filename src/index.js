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
// Ingredience jako komponenty
const appElm = document.querySelector('#app');
const Layer = (props) => {
  const element = document.createElement('div');
  element.className = 'layer';
  element.innerHTML = `
  <div class="layer__color" style="background-color: ${props.color}></div>
  <div class="layer__label">${props.label}</div>`;
  return element;
};

const layer1 = Layer({ color: '#feeeca', label: 'mléčná pěna' });
const layer2 = Layer({ color: '#fed7b0', label: 'teplé mléko' });
const layer3 = Layer({ color: '#613916', label: 'espresso' });

appElm.appendChild(layer1);
appElm.appendChild(layer2);
appElm.appendChild(layer3);
