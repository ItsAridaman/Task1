var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const validator = require('validator');


var UserDetailSchema = new Schema(
    {
        //     firstname:{type:String, required:true},
        //    lastname:{type:String, required:true},
        //    phone:{type:Number, required:true},
        //    address:{type:String, required:true}

        name: { type: String, required: true },
        email: {
            type: String,
            required: true,
            unique: true,

        },
        phone: { type: Number, required: true },
        designation: { type: String, required: true },
        gender: { type: String, required: true },
        course: { type: String, required: true }

    }
)

module.exports = mongoose.model('user', UserDetailSchema);