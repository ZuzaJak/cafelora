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

/* const layer1 = Layer({ color: '#feeeca', label: 'mléčná pěna' });
const layer2 = Layer({ color: '#fed7b0', label: 'teplé mléko' });
const layer3 = Layer({ color: '#613916', label: 'espresso' });

appElm.appendChild(layer1);
appElm.appendChild(layer2);
appElm.appendChild(layer3); */

// Seznam ingrediencí
/* const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
]; */

//Nápoj jako komponenta
const Drink = (props) => {
  const element = document.createElement('div');
  element.className = 'drink';
  element.innerHTML = `
  <div class="drink__product">
  <div class="drink__cup">
    <img src="assets/cups/${props.id}.png" />
  </div>
  <div class="drink__info">
    <h3>${props.name}</h3>
    <div id="app">${props.layers.map((layer) => Layer(layer))}</div>
    </div>
    </div>
    <div class="drink__controls">
    <button class="order-btn">Objednat</button>
    </div>`;
  return element;
};

// Ingredience jako komponenty
const Layer = (props) => {
  return `
  <div class="layer">
      <div class="layer__color" style="background-color: ${props.color}"></div>
      <div class="layer__label">${props.label}</div>
  </div>`;
};
const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
  {
    id: 'romano',
    name: 'Romano',
    ordered: false,
    layers: [
      {
        color: '#fbdf5b',
        label: 'citrón',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
  },
];

const drinksList = document.querySelector('.drinks-list');
drinks.forEach((drink) => {
  drinksList.appendChild(Drink(drink));
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
