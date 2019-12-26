const mongoose=require('mongoose')
const Schema=mongoose.Schema
let ObjectId=Schema.Types.ObjectId
//定义schema
const userSchema=new Schema({
    UserId:ObjectId,
    UserName:{unique:true,type:String},
    Password:{type:String},
    createdAt:{type:Date,default:Date.now()},
    lastLoginAt:{type:Date,default:Date.now()},
})
mongoose.model('User',userSchema)