const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let counter = 0;
while(counter < ingredients.length) {
  console.log(ingredients[counter]);
  counter++;
};

for (i = 0; i<ingredients.length; i++) {
  console.log(ingredients[i]);
};

let reverseIngredients =[];
for (i = ingredients.length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}