import getCocktail from "./utils/getCocktail.js";
import displayCocktail from "./utils/displayCocktail.js";


const showCocktail = async () => {
  const cocktail = await getCocktail();
  displayCocktail(cocktail);
};

window.addEventListener("DOMContentLoader", showCocktail());
