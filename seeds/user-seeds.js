// Require User from the models folder
const { User } = require('../models');

// Create an array of objects representing user properties
const userData = [
  {
    name: 'amazonash',
    password: '12345678'
  },
  {
    name: 'christineoz',
    password: '12345678'
  },
  {
    name: 'John-Mancini',
    password: '12345678'
  },
  {
    name: 'kvaden19',
    password: '12345678'
  },
  {
    name: 'thereal-baitjet',
    password: '12345678'
  },
];

// Have Sequelize do a "bulk create" of User instances based on the array of objects
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;