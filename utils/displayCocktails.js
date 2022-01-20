import getElement from "./getElement.js";
import events from "./events.js";

const div = getElement(".section-center");

const displayCocktails = (cocktails) => {
  const drinks = cocktails.map((drink) => {
    const { strDrink: name } = drink;
    const { strDrinkThumb: image } = drink;
    const { idDrink: id } = drink;

    return `
      <a href="./details.html" data-id='${id}'>
          <article class='cocktail' >
              <img src="${image}" alt="">
              <h3>${name}</h3>
          </article>
      </a>`;
  });
  div.innerHTML = drinks.join("");

  events();
};

export default displayCocktails;
