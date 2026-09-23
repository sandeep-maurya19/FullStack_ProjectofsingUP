const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    pass:String

});

 const user=mongoose.model('users',userSchema);
module.exports=user;