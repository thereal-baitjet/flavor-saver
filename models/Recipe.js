// Require Model and DataTypes from Sequelize package
const { Model, DataTypes } = require('sequelize');
// Set up a variable to represent the already-configured connection
const sequelize = require('../config/connection');

class Recipe extends Model {}

Recipe.init(
    // Set up our Recipe Model to match the Recipe objects from Spoonacular API
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        spoonacular_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING
        },
    },
    {
    // Configurations
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'recipe'
    }
);

module.exports = Recipe;