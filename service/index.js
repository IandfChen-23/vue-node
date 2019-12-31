const koa=require('koa');

const {connect,initSchema}=require('./database/init.js');
const mongoose=require('mongoose');
const Router=require('koa-router');
const bodyParser=require('koa-bodyparser');
var Koa = require('koa');
var cors = require('koa2-cors');
const app=new koa()
app.use(cors());
app.use(bodyParser());
(async ()=>{
    await connect()
    initSchema()
})();
let user=require('./appApi/user');
let goods=require('./appApi/goods');
let category=require('./appApi/category');
let categorysub=require('./appApi/categorysub');
let router=new Router()
router.use('/user',user.routes())
router.use('/goods',goods.routes())
router.use('/category',category.routes())
router.use('/categorysub',categorysub.routes())
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('service listinging at 3000');
})
