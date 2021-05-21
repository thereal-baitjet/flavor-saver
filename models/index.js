// Require all the model files
const User = require("./User");
const Recipe = require("./Recipe");
const Day = require("./Day");

// Create all the model associations
// Each instance of a Date belongs to one User
Day.belongsTo(User, {
  foreignKeyConstraint: true,
  foreignKey: "belongsTo",
  onDelete: "CASCADE",
  constraints: false
});

// One User has many Dates
User.hasMany(Day, {
  foreignKey: "belongsTo",
  onDelete: "CASCADE",
  constraints: false
});

// Association between Date and Recipe
Recipe.hasMany(Day);

// Export all the model files
module.exports = {
  User,
  Recipe,
  Day,
};
