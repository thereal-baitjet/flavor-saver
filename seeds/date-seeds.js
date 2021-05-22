// Require Date from the models folder
const { Day } = require('../models');

// Create an array of objects representing user properties
const dateData = [
  {
    date: '5/22/2021',
    belongsTo: 1,
    breakfast: "Scrambed Eggs and Bagel",
    lunch: "Tomato and Lentil Soup",
    dinner: "Easy Shrimp Scampi",
    snack: "Healthy Mint Brownies"
  },
  {
    date: '5/23/2021',
    belongsTo: 1,
    breakfast: "Chocolate Chip Pancakes",
    lunch: "Roasted Mediterranean Veggie Soup",
    dinner: "Slow-Cooker Lamb Curry",
    snack: null
  },
  {
    date: '5/24/2021',
    belongsTo: 1,
    breakfast: "Avocado Toast",
    lunch: "Corn Avocado Salsa",
    dinner: "BBQ Style Chicken Thighs",
    snack: "Trail Mix"
  },
  {
    date: '5/25/2021',
    belongsTo: 1,
    breakfast: "Overnight Oats",
    lunch: "Classic PB&J",
    dinner: "Crab Cake Stuffed Shrimp",
    snack: null
  },
  {
    date: '5/26/2021',
    belongsTo: 1,
    breakfast: "Avocado Toast,",
    lunch: "Classic French Onion Soup",
    dinner: "Arroz con Leche",
    snack: "Raw Cookie Dough"
  },
  {
    date: '5/27/2021',
    belongsTo: 1,
    breakfast: "Overnight Oats",
    lunch: "Classic PB&J",
    dinner: "Easy Chicken Tandoori",
    snack: "The BEST Lemon Bars"
  },
  {
    date: '5/28/2021',
    belongsTo: 1,
    breakfast: "Avocado Toast",
    lunch: "Buffalo Chicken Sliders",
    dinner: "Pizza Night",
    snack: "Ice Cream in Waffle Cone"
  }
];

// Have Sequelize do a "bulk create" of Date instances based on the array of objects
const seedDates = () => Day.bulkCreate(dateData);

module.exports = seedDates;