const id = localStorage.getItem("id");
const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;

const getCocktail = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const cocktail = data.drinks[0];
    const { strDrink: name } = cocktail;
    const {
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
    } = cocktail;
    const { strInstructions: instructions } = cocktail;
    const { strDrinkThumb: image } = cocktail;
    return {
      name,
      ingredients: [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5],
      instructions,
      image,
    };
  } catch (error) {
    console.log(error);
  }
};

export default getCocktail;
