var router = require("express").Router();
var axios = require("axios");


    var options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/images/classify',
      params: { imageUrl: 'https://spoonacular.com/recipeImages/635350-240x150.jpg' },
      headers: {
        'x-rapidapi-key': '2ed6fc8399msh0d268f4a2e44fcap1c5d78jsn374c76f06b91',
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });

    module.exports = router;
  