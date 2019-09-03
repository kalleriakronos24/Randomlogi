const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

const UserSchema = new mongoose.Schema({

        user_id : String,

        email : {
           type: String,
           required : true,
           unique : true
        },
        full_name : {
                type: String,
                required : true,
                unique: true
        },
        password : {
                type : String,
                unique : true,
                required : true
        },
        profile_pic : String,

})

UserSchema.pre('save',function(next){

        const user = this

        bcrypt.hash(user.password, 10, function(error,encrypted){

                user.password = encrypted;

                next();
        })
})

const user = mongoose.model('user', UserSchema);
 
module.exports = user;       