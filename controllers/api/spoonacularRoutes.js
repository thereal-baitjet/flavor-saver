const router = require("express").Router();
const axios = require("axios");

router.get("/:mealType", async (req, res) => {
  console.log(req.params);
  var options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random",
    params: { number: "10", tags: req.params.mealType },
    headers: {
      "x-rapidapi-key": "81f623a171msh0264f9fa5bd87dcp174c37jsna37441e5702c",
      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };
  axios
    .request(options)
    .then(function (response) {
      //   console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

module.exports = router;
