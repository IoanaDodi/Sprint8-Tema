function pancakeRecipe (par1, par2, par3) {
    const recipe = {
        title: par1,
        portions: par2,
        ingredients: par3,
    };

    return recipe;

};

const food = pancakeRecipe("Clatite", 3, ["eggs", " milk", " flour", " sugar"]);


// pentru raspunsul in forma de obiect:
console.log(food);

///// pentru o instructiune pentru fiecare:
console.log("My favourite recipe is: " + food.title);
console.log("Number of portions: " + food.portions);
console.log("Ingredients you need: " + food.ingredients);