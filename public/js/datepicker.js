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

// JavaScript for the Materialize.CSS datepicker
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = window.M.Datepicker.init(elems, { format: 'm/d/yyyy', maxDate: new Date(2021,4,31)});
});

// Get the date from the date picker
$("#dateform").submit(getDate);

function getDate(e) {
  e.preventDefault();
  let selectedDate = document.getElementById('datepicker').value;
  let basicDate = selectedDate.replaceAll('/', '');
  getMeals(basicDate);
}

// get the current meals for this date
function getMeals(date) {
  const requestURL = `api/planner?date=${date}`;
  let response = fetch(requestURL, {'method': 'GET'});
  return;
}

function addMeal(meal, selectedRecipe, date) {
  console.log("add this meal");
  // Add meal to card in UI
  $(`#${meal}-text`).text(selectedRecipe);
  // Add meal to database
    // Use fetch to call the api/planner route; need to tell it a date
}
