const mongoose = require('mongoose');

const AvatarSchema = new mongoose.Schema({
        avatar_name : String,
        directori_img : String,
        date : Date.now

})

const avatar = mongoose.model('avatar', AvatarSchema);
 
module.exports = avatar;       