function pancakeRecipe (par1, par2, par3) {
    const recipe = {
        title: par1,
        portions: par2,
        ingredients: par3,
    };

    return recipe;

};

const title = "Clatite";
const portions = 3;
const ingredients = ["eggs", " milk", " flour", " sugar"];

const recipe = pancakeRecipe (title, portions, ingredients);

// pentru raspunsul in forma de obiect:
console.log(recipe);

///// pentru o instructiune pentru fiecare:
console.log("My favourite recipe is: " + recipe.title);
console.log("Number of portions: " + recipe.portions);
console.log("Ingredients you need: " + recipe.ingredients);