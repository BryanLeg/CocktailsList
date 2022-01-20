import getElement from "./getElement.js";

const img = getElement(".drink-img");
const title = getElement(".drink-name");
const ingredients = getElement(".drink-ingredients");
const description = getElement(".drink-description");

const displayCocktail = (cocktail) => {
  const ingrs = cocktail.ingredients.filter((word) => {
    return word != null
  })
  img.src = cocktail.image;
  title.textContent = cocktail.name;
  ingredients.textContent = ingrs.join(', ');
  description.textContent = cocktail.instructions;
};

export default displayCocktail;
