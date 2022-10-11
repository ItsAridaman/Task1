var mongoose=require('mongoose');
var Schema = mongoose.Schema;

var UserImage= new Schema(
    {
    Name:String,
    desc:String,
    img:{
        data:Buffer,
        contentType:String
    }
    }
);

module.exports=mongoose.model('Image', UserImage);