// Require all the model files
const User = require('./User');
const Recipe = require('./Recipe');
const Date = require('./Date');

// Create all the model associations
    // Each instance of a Date belongs to one User

    // One User has many Dates

    // One Date has many Recipes

    // One Recipe belongs to many Dates

// Export all the model files
module.exports = {
    User,
    Recipe,
    Date
}