'use-strict';

const db = require('../database/models/user');

module.exports.Create = (req,res) => {

        db.create({
            user_id : req.body.useer_id,
        email : req.body.email,
        full_name : req.body.full_name,
        password : req.body.password,
        profile_pic : req.body.img_src
    }, (err, db) => {
        res.redirect('back');
    })

}


