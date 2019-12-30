const Router=require('koa-router')
const mongoose=require('mongoose')
let router=new Router()
router.get('/',async(ctx)=>{
    ctx.body='首页'
})
router.post('/login',async(ctx)=>{
    console.log(ctx.request.body);
    let loginUser=ctx.request.body;
    let userName =loginUser.userName;
    let password=loginUser.password;
    const User=mongoose.model('user');
    await  User.findOne({userName:userName},).exec().then(
        async (res)=>{
        console.log('findOne'+JSON.stringify(res) );
        if(res){
            let newUser=new User()
            await newUser.comparePassword(password,res.password).then(isMatch=>{
                if(isMatch){
                    ctx.body={
                        code:200,
                        message:'success',
                    }
                }
                else{
                    ctx.body={
                        code:200,
                        message:'密码错误',
                    }
                }
            }).catch(err=>{
                console.log(err);
                ctx.body={
                    code:500,
                    message:'服务端异常'
                }
            })
        }else{
            ctx.body={
                code:200,
                message:'用户名不存在',
            }
        }
    }).catch(err=>{
        console.log(err);
        ctx.body={code:500,message:err}
    })
})
router.post('/register',async(ctx)=>{
    const User=mongoose.model('user')
    let newUser=new User(ctx.request.body)
    await newUser.save().then(()=>{
        ctx.body={
            code:200,
            message:'注册成功'
        }
    }).catch(err=>{
        ctx.body={
            code:500,
            message:err
        }
    })
})
module.exports=router