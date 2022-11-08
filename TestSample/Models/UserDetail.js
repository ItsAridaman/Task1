var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserDetailSchema = new Schema(
    {
        

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