const User = require('../database/models/user');

module.exports = (req,res,next) => {

    User.findById(req.session.userId, (error,user) => {
        if(error || !user){
            req.session.destroy(() => {
                res.redirect('/');
            })
        }
    })
}