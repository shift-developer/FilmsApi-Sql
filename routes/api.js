const router = require('express').Router();
const middleware = require('../middlewares/middlewares');

const apiFilmsRouter = require('./api/films');
const apiUserRouter = require('./api/users');

router.use('/films', middleware.checkToken ,apiFilmsRouter);
router.use('/users', apiUserRouter);

module.exports = router;