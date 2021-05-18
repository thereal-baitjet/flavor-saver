// Require all the model files
const User = require('./User');
const Recipe = require('./Recipe');
const Date = require('./Date');
const Wine = require('./Wine');

// Nice-to-haves, might create these later
// const Ingredient = require('./Ingredient');
// const Drink = require('./Drink');

// Create all the model associations
// User.hasMany(Recipe, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE'
//   });
  
//   Recipe.belongsTo(User, {
//     foreignKey: 'user_id'
//   });

// Export all the model files
module.exports = {
    User,
    Recipe,
    Date,
    Wine,
    // Ingredient,
    // Drink
}
