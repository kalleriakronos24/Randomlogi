const User = require('../database/models/user');
const bcrypt = require('bcrypt');

module.exports = (req,res)  => {

    const email = req.body.email
    const password = req.body.password

    User.findOne({ email }, (error,user) => {

        if(user){

        bcrypt.compare(password, user.password, (error, result) => {

            if(result){
                req.session.real_user_id = user.user_id
                req.session.userId = user._id
                req.session.img = user.profile_pic
                req.session.full_name = user.full_name
                res.redirect('/')
            }else{
               res.redirect('/');
            }
        })

        } else {
          console.log('user tidak ditemukan');
        }
    })
}

module.exports.Admin = (req, res) => {



    const password = req.body.password

    User.findOne({ email : 'admin@memelogi.com' }, (error,user) => {

        if(user){

        bcrypt.compare(password, user.password, (error, result) => {

            if(result){
                req.session.real_user_id = user.user_id
                req.session.userId = user._id
                req.session.img = user.profile_pic
                req.session.email = user.email
                res.redirect('/dashboard/vid')
            }else{
               res.redirect('/');
            }
        })

        } else {
          console.log('Unknown User');
        }
    })

}

module.exports.Render = (req, res) => {
    res.render('mobile_login');
}
module.exports.RenderRegisterPage = (req, res) => {
    res.render('mobile_register');
}