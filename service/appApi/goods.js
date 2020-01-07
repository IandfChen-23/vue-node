const Koa=require('koa')
const mongoose=require('mongoose')
const Router=require('koa-router')
const fs=require('fs')
let router=new Router()
router.get('/insertAllGoods',async (ctx)=>{
    fs.readFile('./data_json/newGoods.json','utf8',(err,data)=>{
        
        if(!err){
            data=JSON.parse(data)
            
            let saveCount=0
            const Goods=mongoose.model('Goods')
            data.map((val,index)=>{
                let newGoods=new Goods(val);
                newGoods.save().then(()=>{
                    saveCount++;
                    console.log('插入数据成功',saveCount);
                }).catch((err)=>{
                    console.log(err);
                })
            })
        }
        
    })
    ctx.body='开始导入数据'
})
router.post('/getDetail',async (ctx)=>{
    let goodId=ctx.request.body.goodsId;
    console.log(ctx.request.body);
    
    const Goods=mongoose.model('Goods');
    await Goods.findOne({'ID':goodId}).exec().then(res=>{
        if(res){
            ctx.body={
                code:200,
                message:res
            }
        }
        else{
            ctx.body={
                code:500,
                message:'该类商品已下架'
            } 
        }
    }).catch(err=>{
        console.log(err);
        ctx.body={
            code:500,
            message:err
        }
    })
})
router.get('/all',async (ctx)=>{
    
    const Goods=mongoose.model('Goods');
    await Goods.find(function(err,res){
        if(err){
           console.log('查询失败')
        } else {
            ctx.body={
                code:200,
                message:'success',
                res
            }
        }
    })
})
module.exports=router