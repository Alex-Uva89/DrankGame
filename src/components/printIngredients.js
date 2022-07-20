
import getIngredientRandom from './ingridientsRandom';



async function printIngredientCocktails(randomCocktail){

    const ingredientRandom = await getIngredientRandom();
    const containerIngredients = document.getElementById("ingredients");
    const ingredientsOfCocktail = randomCocktail.strIngredient1;
    console.log(ingredientsOfCocktail);

    const arrayIngredientsOfCocktail = [];
    for (let i = 1; i <= 15 ; i++) {
        if (randomCocktail[`strIngredient${i}`]) {
            arrayIngredientsOfCocktail.push(randomCocktail[`strIngredient${i}`]);
        }
    }

    ingredientRandom.forEach(ingredient => {
        //creo il div contenitore
        const containerIngredient = document.createElement("div");
        containerIngredients.appendChild(containerIngredient);

        // creo il contenuto del div
        const img = document.createElement("img");
        img.classList.add("ingredient");
        img.src = `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Small.png`;
        img.alt = ingredient;
        containerIngredient.appendChild(img);
        const ingredientName = document.createElement("h5");
        ingredientName.innerHTML = ingredient;
        containerIngredient.appendChild(ingredientName);
        // creo la funzionalità al div
        containerIngredient.addEventListener("click", () => {

            if (arrayIngredientsOfCocktail.includes(ingredient)) {
                const containerWin = document.getElementById("result");
                containerWin.classList.remove("hidden");
                containerWin.innerHTML = "Hai vinto!";
            } else {
            const containerLose = document.getElementById("result");
            containerLose.classList.remove('hidden');
            containerLose.innerHTML = "Hai perso!";
            }
                
        
            console.log(arrayIngredientsOfCocktail);
            console.log(ingredient);
            console.log(ingredientsOfCocktail.includes(ingredient));
        }
        );
    }
    );

}

export default printIngredientCocktails;