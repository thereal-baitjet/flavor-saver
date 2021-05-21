const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/users', userRoutes);
router.use('/api', apiRoutes);

module.exports = router;