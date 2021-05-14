// Require all the model files
const User = require('./User');
const Recipe = require('./Recipe');
const Date = require('./Date');

// Nice-to-haves, might create these later
// const Ingredient = require('./Ingredient');
// const Drink = require('./Drink');

// Create all the model associations

// Export all the model files
module.exports = {
    User,
    Recipe,
    Date,
    // Ingredient,
    // Drink
}