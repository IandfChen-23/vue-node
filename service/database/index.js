const mongoose=require('mongoose')
const url='mongodb://localhost/smile-demo'
const glob=require('glob')
const {resolve}=require('path')
exports.initSchema=()=>{
    glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
}
exports.connect=()=>{
    mongoose.connect(url)
    let maxConnnection=0
    return new Promise((resolve,reject)=>{
        mongoose.connection.on('disconnected',()=>{
            console.log('数据库断开');
            maxConnnection++;
            if(maxConnnection<5){
                mongoose.connect(url);
            }else{
                reject()
                throw new Error('数据库出现问题，请人为处理')
            }
        })
        mongoose.connection.on('error',()=>{
            console.log('数据库断开');
            maxConnnection++;
            if(maxConnnection<5){
                mongoose.connect(url);
            }else{
                reject()
                throw new Error('数据库出现问题，请人为处理')
            }
        })
        mongoose.connection.once('open',()=>{
        console.log('数据库已连接');
        resolve();
        })  
    })
    
}