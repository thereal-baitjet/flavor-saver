const router = require('express').Router();
const spoonacularRoutes = require('./spoonacularRoutes');
const plannerRoutes = require('./plannerRoutes');

router.use('/spoonacular', spoonacularRoutes);
router.use('/planner', plannerRoutes);

module.exports = router;
