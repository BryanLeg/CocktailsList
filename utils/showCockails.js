import getCocktails from "./getCocktails.js";
import displayCocktails from "./displayCocktails.js";

const title = document.querySelector('.title');
const div = document.querySelector('.section-center');

const showCocktails = async (value) => {
    const cocktails = await getCocktails(value);
    cocktails != null ? displayCocktails(cocktails) : title.textContent = "Aucun cocktail ne correspond";
    cocktails != null ? displayCocktails(cocktails) : div.innerHTML = "";
    setTimeout(function () { title.textContent = " " }, 1500)
};

export default showCocktails;