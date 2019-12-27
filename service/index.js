const koa=require('koa')
const {connect,initSchema}=require('./database/init.js');
const mongoose=require('mongoose');
const Router=require('koa-router');
const bodyParser=require('koa-bodyparser');
var Koa = require('koa');
var cors = require('koa2-cors');
const app=new koa()
app.use(cors());
let user=require('./appApi/user');
let router=new Router()
router.use('/user',user.routes())
app.use(router.routes())
app.use(bodyParser())
app.use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('service listinging at 3000');
})
// (async ()=>{
//     await connect()
//     initSchema()
//     const User=mongoose.model('user')
//     let oneUser= new User({
//         userName:'leige',
//         password:'123456'
//     })
//     //插入数据
//     oneUser.save().then(()=>{
//         console.log('插入成功');
//     }).catch((err)=>{
//         console.log(err);
//     })
//     //查找数据
//     User.find({userName:'leige'}).then(res=>{
//         console.log('查询成功',res)
//     })
//     //删除数据
// //     User.remove({userName:'leige'}).then((res)=>{
// //         console.log('删除成功',res)
// //    })
// })()
// app.use(async (ctx)=>{
//     ctx.body=''
// })