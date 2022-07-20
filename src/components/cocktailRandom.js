import axios from 'axios';

const urlCocktail = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const getCocktailRandom = async() => {
    const response = await axios.get(urlCocktail);
    return response.data.drinks[0];
}



export default getCocktailRandom;
