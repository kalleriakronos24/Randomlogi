'use-strict';
const db = require('../database/models/video');
const p_db = require('../database/models/post');
const User = require('../database/models/user');

module.exports.FetchAllVids = async (req,res) => {
    
    if(req.session.email != 'admin@memelogi.com'){
        res.redirect('/');
    }else{
        const user_id = req.session.userId
        const pp = req.session.img
        const user_name = req.session.full_name
        const userid = req.session.real_user_id
        const email = req.session.email
        const vid = await db.find({});
        res.render('dashboard', {
            vid,
            user_id,
            pp,
            user_name,
            userid,
            email
        })
    }
    
}

module.exports.ShowOnDashboard = async (req, res) => {
 

    if(req.session.email != 'admin@memelogi.com'){
        res.redirect('/');
    }else{
        const user_id = req.session.userId
        const pp = req.session.img
        const user_name = req.session.full_name
        const userid = req.session.real_user_id
        const email = req.session.email
        const postp = await p_db.find({});
        res.render('indexpic', {
            postp,
            user_id,
            pp,
            user_name,
            userid,
            email
        })
    }
}

module.exports.FetchUser = async (req, res) => {
 

    if(req.session.email != 'admin@memelogi.com'){
        res.redirect('/');
    }else{
        const user_id = req.session.userId
        const pp = req.session.img
        const user_name = req.session.full_name
        const userid = req.session.real_user_id
        const email = req.session.email

        const postp = await User.find({});

        res.render('users', {
            postp,
            user_id,
            pp,
            user_name,
            userid,
            email
        })
    }
}

module.exports.DeleteVid = (req,res) => {
    const vid_id = db.findById({ _id : req.params.id }).remove().exec();
    res.redirect('back');

}

module.exports.DeletePic = (req, res) => {
    const pic_id = p_db.findById({ _id : req.params.id }).remove().exec();
    res.redirect('back');
}

