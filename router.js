const Router = require('koa-router');
const router = new Router();

router.all('/', require('./biliiwts'));

module.exports = router;