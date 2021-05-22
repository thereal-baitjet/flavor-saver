// const { default: axios } = require("axios");

var editMealBtns = document.getElementsByClassName("editBreakfast");
for (let i = 0; i < editMealBtns.length; i++) {
  var mealBtn = editMealBtns[i];
  mealBtn.addEventListener("click", function () {
    $("#mealOptions").empty();
    axios.get("/api/spoonacular/breakfast").then(function (response) {
      console.log(response.data.recipes);
      let breakfastData = response.data.recipes;
      for (let i = 0; i < breakfastData.length; i++) {
        const element = $("<button>");
        let name = breakfastData[i].title;
        element.text(name);
        element.click(function () {
          const selectedRecipe = $(this).text();
          console.log(selectedRecipe);
          addMeal("breakfast", selectedRecipe);
        });
        $("#mealOptions").append(element);
        let recipe = breakfastData[i].instructions;
        console.log(name, recipe);
      }
    });
  });
}

var editMealBtns = document.getElementsByClassName("editLunch");
for (let i = 0; i < editMealBtns.length; i++) {
  var mealBtn = editMealBtns[i];
  mealBtn.addEventListener("click", function () {
    $("#mealOptions").empty();
    axios.get("/api/spoonacular/lunch").then(function (response) {
      console.log(response.data.recipes);
      let lunchData = response.data.recipes;
      for (let i = 0; i < lunchData.length; i++) {
        const element = $("<button>");
        let name = lunchData[i].title;
        element.text(name);
        element.click(function () {
          const selectedRecipe = $(this).text();
          console.log(selectedRecipe);
          addMeal("lunch", selectedRecipe);
        });
        $("#mealOptions").append(element);
        let recipe = lunchData[i].instructions;
        console.log(name, recipe);
      }
    });
  });
}

var editMealBtns = document.getElementsByClassName("editDinner");
for (let i = 0; i < editMealBtns.length; i++) {
  var mealBtn = editMealBtns[i];
  mealBtn.addEventListener("click", function () {
    $("#mealOptions").empty();
    axios.get("/api/spoonacular/dinner").then(function (response) {
      console.log(response.data.recipes);
      let dinnerData = response.data.recipes;
      for (let i = 0; i < dinnerData.length; i++) {
        const element = $("<button>");
        let name = dinnerData[i].title;
        element.text(name);
        element.click(function () {
          const selectedRecipe = $(this).text();
          console.log(selectedRecipe);
          addMeal("dinner", selectedRecipe);
        });
        $("#mealOptions").append(element);
        let recipe = dinnerData[i].instructions;
        console.log(name, recipe);
      }
    });
  });
}

var editMealBtns = document.getElementsByClassName("editSnack");
for (let i = 0; i < editMealBtns.length; i++) {
  var mealBtn = editMealBtns[i];
  mealBtn.addEventListener("click", function () {
    $("#mealOptions").empty();
    axios.get("/api/spoonacular/snack").then(function (response) {
      console.log(response.data.recipes);
      let snackData = response.data.recipes;
      for (let i = 0; i < snackData.length; i++) {
        const element = $("<button>");
        let name = snackData[i].title;
        element.text(name);
        element.click(function () {
          const selectedRecipe = $(this).text();
          console.log(selectedRecipe);
          addMeal("snack", selectedRecipe);
        });
        $("#mealOptions").append(element);
        let recipe = snackData[i].instructions;
        console.log(name, recipe);
      }
    });
  });
}

function addMeal(meal, selectedRecipe) {
  console.log("add this meal");
  $(`#${meal}-text`).text(selectedRecipe);
}
