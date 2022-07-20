'use strict';

import './style.scss';
import printCocktailRandom from './components/printCocktail';
import getIngredientsByCocktail from './components/getIngredients';
import getCocktailRandom from './components/cocktailRandom';
import printIngredientCocktails from './components/printIngredients';

const startButton = document.getElementById("start");

startButton.addEventListener("click", init);

async function init(){
    if(startButton.innerHTML === "Start"){
    const randomCocktail = await getCocktailRandom();
    printCocktailRandom(randomCocktail);
    getIngredientsByCocktail(randomCocktail);
    startButton.innerHTML = "Nuovo drink";
    printIngredientCocktails(randomCocktail);
    } else {
        const containerCocktail = document.getElementById("cocktailRandom");
        containerCocktail.innerHTML = "";
        const randomCocktail = await getCocktailRandom();
        getIngredientsByCocktail(randomCocktail);
        printCocktailRandom(randomCocktail);
        startButton.innerHTML = "Nuovo drink"; 
        const containerResult = document.getElementById("result");
        containerResult.classList.add("hidden");
    }
    
}












