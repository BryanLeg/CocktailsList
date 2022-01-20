import showCocktails from "./showCockails.js";

const form = document.form;
const drink = form.elements.drink;
export default () => {
    form.addEventListener('keyup', (e) => {
        e.preventDefault();
        drink.value != "" ? showCocktails(drink.value) : drink.value = none;
    })
}
