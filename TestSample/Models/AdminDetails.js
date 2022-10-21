var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');


var AdminDetails = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required:true,match:/@/,lowercase:true, trim:true },
        password: { type: String, required: true, minlength: 5, maxlength: 9},
        confirmpassword: { type: String, required: true }
    }
)

AdminDetails.pre('save', function (next) {
    console.log("yes it is running")
    if (this.password && this.isModified('password')) {
        console.log(this.password);


        bcrypt.hash(this.password, 10, function (err, hash) {
            console.log("yes it is also running")
            console.log(hash);
            if (err) return next(err);
            this.password = hash;
            console.log(hash);
            return next();
        });

    }
    else {
        next()
    }

});



AdminDetails.methods.verifypassword = async function (password) {
    try {
        var result = await bcrypt.compare(password, this.password);
        return result;
    }
    catch (error) {
        return error;
    }
    bcrypt.compare()
}


AdminDetails.methods.signToken =function () {
    var payload = { userId: this.id, email: this.email };
    try {
        var token = jwt.sign(payload, "thisisthesecret");
        return token;
    }
    catch (error) {
        return error;
    }
}

// AdminDetails.methods.userJSON = function (token) {
//     return {
//         name: this.name,
//         email: this.email,
//         role: this.role,
//         token: token
//     }
// }



module.exports = mongoose.model('Admin', AdminDetails);