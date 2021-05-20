const fetch = require('node-fetch');
const { Recipe } = require("../models");
require('dotenv').config();

const numResults = 100; // Set # of results from Spoonacular here

// Function to get recipes from Spoonacular API
async function getRecipes() {
    // Use the "Get Random Recipe" endpoint from the Spoonacular API
    const requestURL = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=${numResults}`;

    let response = await fetch(requestURL, {
        "method": "GET",
        "headers": {
            // TODO: Need to figure out how to hide this key
            "x-rapidapi-key": process.env.API_KEY,
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    });

    let result = await response.json();
    // Repeat this loop for every item in the API results
    let recipes = [];
    for (i = 0; i < numResults; i++) {
        // Access the ith recipe in the API results
        let apiRecipe = result.recipes[i];
        let modelRecipe = { spoonacular_id: apiRecipe.id, name: apiRecipe.title, image: apiRecipe.image };
        recipes.push(modelRecipe);
    }
    return recipes;
}

// Function to use results of getRecipes() to seed Recipe table
async function seedRecipes() {
    let recipeData = await getRecipes();
    Recipe.bulkCreate(recipeData);
};

module.exports = seedRecipes;