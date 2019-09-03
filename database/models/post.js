const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    
    postp_id : String,
    caption: String,
    source: String,
    uploader: String,
    image: String,
    time: String,
    date : String,
    posted_on: {
        type: Date,
        default: new Date()
    },
    comment: 0

})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;