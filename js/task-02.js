const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arr = ingredients.map(el => {
  const li = document.createElement('li');
  li.textContent = el;
  li.classList.add('item');
  return li;
})

document.querySelector('#ingredients').append(...arr);
