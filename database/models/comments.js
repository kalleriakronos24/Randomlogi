const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
   name : String,
   post_id : String,
   comment_at: {
    type: Date,
    default: new Date()
},
   text : {
      type : String,
      required : true
   },
   timez : String,
   profile_pic : String
})

const comments = mongoose.model('comments', PostSchema);

module.exports = comments;       