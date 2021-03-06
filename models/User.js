// Require Model and DataTypes from Sequelize package
const { Model, DataTypes } = require("sequelize");
// Set up a variable to represent the already-configured connection
const sequelize = require("../config/connection");
// Require bcrypt
const bcrypt = require("bcrypt");

class User extends Model {
  // checkPassword function
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  // Set up User with id, name, and password attributes
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    // Configurations
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
      beforeBulkCreate: async (newUserArray) => {
        for (const user of newUserArray) {
            user.password = await bcrypt.hash(user.password, 10);
        }
        return newUserArray;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
