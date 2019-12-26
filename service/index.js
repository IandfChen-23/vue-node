const koa=require('koa')
const app=new koa()
const {connect,initSchema}=require('./database/index.js');
const mongoose=require('mongoose');
(async ()=>{
    await connect()
    initSchema()
    const User=mongoose.model('user')
    let oneUser= new User({
        UserName:'leige',
        Password:'123456'
    })
    oneUser.save().then(()=>{
        console.log('插入成功');
        
    })
})()
// app.use(async (ctx)=>{
//     ctx.body=''
// })