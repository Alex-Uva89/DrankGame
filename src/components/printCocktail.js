
function printCocktailRandom(cocktailRandom){
    const cocktailRandomDiv = document.getElementById("cocktailRandom");
    const cocktailRandomImg = document.createElement("img");
    cocktailRandomImg.src = cocktailRandom.strDrinkThumb;
    cocktailRandomDiv.appendChild(cocktailRandomImg);
    const cocktailRandomName = document.createElement("h2");
    cocktailRandomName.innerHTML = `Nome drink: `+ cocktailRandom.strDrink;
    cocktailRandomDiv.appendChild(cocktailRandomName);
}





export default printCocktailRandom;