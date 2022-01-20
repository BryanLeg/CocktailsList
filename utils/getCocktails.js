
const getCocktails = async (value = 'a') => {
  try {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`;
    const response = await fetch(url);
    const { drinks } = await response.json();

    return drinks;
  } catch (error) {
    console.log(error);
  }
};

export default getCocktails;
