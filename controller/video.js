const path = require('path');
const vidpost = require('../database/models/video')
const comments = require('../database/models/comments')


module.exports.Create = (req,res) => {

    let sampleFile;

    if(Object.keys(req.files).length == 0){
        res.status(400).send('No Files were uploaded');
        return res.redirect('back');
    }

    console.log('req.files >>>', req.files);

    sampleFile = req.files.vid;

    sampleFile.mv(path.resolve(__dirname, '/Go-Blog/public/videos', sampleFile.name), (err) => {
        
    vidpost.create({

        postv_id : req.body.post_id,
        uploader : req.body.uploader,
        caption : req.body.caption,
        source : req.body.source,
        date : req.body.date,
        time : req.body.posted_time,
        video: `/videos/${sampleFile.name}`
    }, (error, result) => {
        console.log(error);
        console.log(result);
    })
        if(err){
            return res.status(500).send(err);
        }
        res.status(200);
        res.redirect('back');
    })


}


module.exports.Update = (req, res) => {

    let sampleFile;

    if(Object.keys(req.files).length == 0){
        res.status(400).send('No Files were uploaded');
        return res.redirect('back');
    }

    console.log('req.files >>>', req.files);

    sampleFile = req.files.vid;

    sampleFile.mv(path.resolve(__dirname, '/Go-Blog/public/videos', sampleFile.name), (err) => {
    
    const update = vidpost.updateOne({ postv_id : req.body.post_id }, {
        $set : {
            source : req.body.source,
            caption : req.body.caption,
            video : `/videos/${sampleFile.name}`
        }
    }, (error , result) => {
       console.log(error);
       console.log(result);
        
    }).exec();
  
        if(err){
        return res.status(500).send(err);
         }
            res.status(200);
            res.redirect('back');
    })

}



module.exports.DisplayPageEdit = async (req, res) => {

    if(req.session.email != 'admin@memelogi.com'){
        res.redirect('/');
    }else{
    const post_id = req.params.idv;
    const fetch_vid_details = await vidpost.findById(req.params.id);
    res.render('e-vid', {
        fetch_vid_details,
        post_id
    })
}
}


module.exports.DisplayPageCreate = (req, res) => {
    if(req.session.email != 'admin@memelogi.com'){
        res.redirect('/');
    }else{
    res.render('c-vid');
    }
}

module.exports.Show = async (req,res) => {
    const vidpostz = await vidpost.find({})
    console.log(vidpostz);
    res.render('vids',{
    vidpostz
    })
}

module.exports.IndexVideo = async (req,res) => {

    const user_id = req.session.userId
    const pp = req.session.img
    const user_name = req.session.full_name
    const userid = req.session.real_user_id
    const posts = await vidpost.find({})

    res.render('videos',{
    posts,
    user_id,
    pp,
    user_name,
    userid
    })
}

module.exports.viewPost = async (req,res) => {

    const user_id = req.session.userId
    const pp = req.session.img
    const user_name = req.session.full_name
    const userid = req.session.real_user_id
    const videox = await vidpost.findById(req.params.id);
    const comment = await comments.find({ post_id : req.params.id })
    console.log(req.session.img);
    res.render('vids', {
        videox,
        comment,
        user_id,
        pp,
        user_name,
        userid
    })
} 
