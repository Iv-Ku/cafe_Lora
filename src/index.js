import './style.css';

console.log('funguju!');

const menuElm = document.querySelector('#nav-btn');

menuElm.addEventListener('click', (event) => {
  console.log('Stisknuto');
  const navigace = document.querySelector('nav');
  navigace.classList.toggle('nav-closed');
});

const polozkyMenuElm = document.querySelector('.navigation a');
polozkyMenuElm.forEach((element) => {
  console.log('vypsat element', element);
  element.addEventListener('click', () => {
    console.log('stisknutí položky');
    const navElm = document.querySelector('nav');
    navElm.classList.toggle('nav-closed');
  });
});
