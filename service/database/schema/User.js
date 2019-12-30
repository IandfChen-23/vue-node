const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcryptjs')
const SALT_WORK_FACTOR = 10

//创建UserShema
const userSchema = new Schema({
    UserId :{type:ObjectId},
    userName : {unique:true,type:String},
    password : {type:String},
    createAt:{type:Date, default:Date.now()},
    lastLoginAt:{type:Date, default:Date.now()}
},{
  collection:'user'  
}) 
userSchema.pre('save', function(next){
    var user = this;
    bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
        if(err) return next(err)
        bcrypt.hash(user.password,salt,(err,hash)=>{
            if(err) return next(err)
            user.password = hash
            next()
        })
    })
})

userSchema.methods={
    comparePassword:(_password,password)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
}


//发布模型
mongoose.model('user',userSchema)

