var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var UserDetailSchema= new Schema(
    {
        Cityname:{type:String},
       Name:{type:String},
       PhoneNumber:{type:Number},
       Image:{type:String}
    }
)

module.exports=mongoose.model('user', UserDetailSchema);