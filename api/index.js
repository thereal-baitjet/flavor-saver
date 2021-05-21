const router = require('express').Router();
const userRoutes = require('./userRoutes');
const homeRoutes = require('./homeRoutes');
const spoonacularRoutes = require('./spoonacularRoutes');
//change these to match what needed VVV
// const projectRoutes = require('./projectRoutes');


 router.use('/users', userRoutes);
 router.use('/spoonacular', spoonacularRoutes)
 router.use('/', homeRoutes);


module.exports = router;
