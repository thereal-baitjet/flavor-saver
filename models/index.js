// Require all the model files
const User = require('./User');
const Recipe = require('./Recipe');
const Date = require('./Date');

// Create all the model associations
    // Each instance of a Date belongs to one User
    Date.belongsTo(User, {
        foreignKeyConstraint: true,
        foreignKey: 'belongsTo',
        onDelete:'CASCADE',
    });

    // One User has many Dates
    User.hasMany(Date, {
        foreignKey: 'belongsTo',
        onDelete: 'CASCADE',
    });

    // TODO: do we need an association between Date and Recipe?

// Export all the model files
module.exports = {
    User,
    Recipe,
    Date
};
