const router = require('express').Router();
const userRoutes = require('./userRoutes');

//change these to match what needed VVV
// const projectRoutes = require('./projectRoutes');

 router.use('/users', userRoutes);
// router.use('/rece', projectRoutes);

module.exports = router;
