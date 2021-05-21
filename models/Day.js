// Require Model and DataTypes from Sequelize package
const { Model, DataTypes } = require('sequelize');
// Set up a variable to represent the already-configured connection
const sequelize = require('../config/connection');

class Day extends Model {}

Day.init(
    // Set up a Date model to represent one date on the "Weekly Calendar" tab, and the users and recipes associated with it
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        belongsTo: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id'
            }
        },
        breakfast: {
            type: DataTypes.STRING,
            // references: {
            //   model: 'recipe',
            //   key: 'id'
            // }
        },
        lunch: {
            type: DataTypes.STRING,
            // references: {
            //   model: 'recipe',
            //   key: 'id'
            // }
        },
        dinner: {
            type: DataTypes.STRING,
            // references: {
            //   model: 'recipe',
            //   key: 'id'
            // }
        },
        snack: {
            type: DataTypes.STRING,
            // references: {
            //   model: 'recipe',
            //   key: 'id'
            // }
        },
    },
    {
    // Configurations
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'day'
    }
);

module.exports = Day;