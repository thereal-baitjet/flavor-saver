const router = require('express').Router();
const spoonacularRoutes = require('./spoonacularRoutes');

router.use('/spoonacular', spoonacularRoutes)

module.exports = router;
