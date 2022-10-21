var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var UserDetailSchema= new Schema(
    {
        firstname:{type:String, required:true},
       lastname:{type:String, required:true},
       phone:{type:Number, required:true},
       address:{type:String, required:true}
    }
)

module.exports=mongoose.model('user', UserDetailSchema);