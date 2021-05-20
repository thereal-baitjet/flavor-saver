var editMealBtns = document.getElementsByClassName("editMeal");
for (let i = 0; i < editMealBtns.length; i++) {
  var mealBtn = editMealBtns[i];
  mealBtn.addEventListener("click", function () {
    axios.get("/spoonacular/breakfast").then(function (response) {
      console.log(response);
    });
  });
}
