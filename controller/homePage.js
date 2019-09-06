const vidpost = require('../database/models/video')
const Post = require('../database/models/post');

module.exports = async (req, res) => {

    function calcDate(city, offset) {

        d = new Date();
        
        utc = (d.getTimezoneOffset() * 60000) + d.getTime();
        
        nd = new Date(utc + (3600000*offset));
        
        return nd.toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' });
        
        }

        const server_date = calcDate('Singapore', '+8');


    const vidpostz = await vidpost.find({ date : server_date });

    const posts = await Post.find({ date : server_date });

    const user_id = req.session.userId
    const pp = req.session.img
    const user_name = req.session.full_name
    const userid = req.session.real_user_id
    
    res.render('index',{
        vidpostz,
        user_id,
        pp,
        user_name,
        userid,
        posts
    })

};
 