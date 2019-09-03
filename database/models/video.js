const mongoose = require('mongoose');


const VideoSchema = new mongoose.Schema({
    
    postv_id : String,
    caption: String,
    source: String,
    uploader: String,
    video: String,
    time: String,
    date : String,
    posted_on: {
        type: Date,
        default: new Date()
    },
    comment: 0

})

const Video = mongoose.model('video', VideoSchema);

module.exports = Video;