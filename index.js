const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const header = require('./header')
const router = require('./router')
const port = 3001;
const app = new Koa();
app.proxy = true;
app.use(bodyParser());
app.use(header);
app.use(router.routes()).use(router.allowedMethods());
app.listen(port);
console.log('app started on port ' + port);