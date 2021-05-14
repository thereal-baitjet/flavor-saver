// Require Model and DataTypes from Sequelize package
const { Model, DataTypes } = require('sequelize');
// Set up a variable to represent the already-configured connection
const sequelize = require('../config/connection');
// Require bcrypt

class User extends Model {
    // checkPassword function
}

User.init(
    // Set up User with id, name, and password attributes
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
    // Configurations
        hooks: {
            // encrypt password
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;