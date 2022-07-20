import axios from 'axios';

const urlIngredients = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list';

const getIngredientRandom = async() => {
    const response = await axios.get(urlIngredients);
    const ingredients = response.data.drinks.map(ingredient => ingredient.strIngredient1);
    return ingredients;  
}

export default getIngredientRandom;


