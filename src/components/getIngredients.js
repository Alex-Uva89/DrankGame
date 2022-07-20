import getCocktailRandom from "./cocktailRandom";

function getIngredientsByCocktail(drinkRandom){
    const drink = drinkRandom;
    const ingredients = [];
    for (let i = 1; i <= 15 ; i++) {
        if (drink[`strIngredient${i}`]) {
            ingredients.push(drink[`strIngredient${i}`]);
        }
    }   
    return ingredients;
}

export default getIngredientsByCocktail;