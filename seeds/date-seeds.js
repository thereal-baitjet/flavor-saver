// Require Date from the models folder
const { Date } = require('../models');

// Create an array of objects representing user properties
const dateData = [
  {
    date: 'Saturday, May 22nd, 2021',
    belongsTo: 1,
    breakfast: 1,
    lunch: 2,
    dinner: 3,
    snack: 4
  },
  {
    date: 'Sunday, May 23rd, 2021',
    belongsTo: 1,
    breakfast: 9,
    lunch: 6,
    dinner: 10,
    snack: 4
  },
  {
    date: 'Monday, May 24th, 2021',
    belongsTo: 1,
    breakfast: 1,
    lunch: 3,
    dinner: 7,
    snack: 8
  }
];

// Have Sequelize do a "bulk create" of Date instances based on the array of objects
const seedDates = () => Date.bulkCreate(dateData);

module.exports = seedDates;