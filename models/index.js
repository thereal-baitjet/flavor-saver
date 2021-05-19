// Require all the model files
const User = require('./User');
const Recipe = require('./Recipe');
const Date = require('./Date');


// Create all the model associations
    // Each instance of a Date belongs to one User
    Date.belongsTo(User, {
        foreignKey: 'user_id',
        onDelete:'CASCADE',
    });
    // One User has many Dates
   User.hasMany(Date, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
    });

    // One Date has many Recipes
    Date.hasMany(Recipe, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
    });

    // One Recipe belongs to many Dates
    Recipe.belongsTo(Date, {
        foreignKey: 'user_id'
    })

// Export all the model files
module.exports = {
    User,
    Recipe,
    Date
};
