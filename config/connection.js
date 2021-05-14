// Require dependencies
const Sequelize = require('sequelize');
require('dotenv').config();

// Set up a variable to represent a Sequelize instance
let sequelize;

// Configure sequelize to run on Heroku (JAWSDB) or locally
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

module.exports = sequelize;