const mongoose = require('mongoose');


const Post = require('./database/models/post')



mongoose.connect('mongodb://localhost/node-js-test-blog');


Post.find({}, (error,posts) =>{
    console.log(error,posts);
}) 

// Post.create({
//     title: 'My Second Blog App',
//     description: 'Nothing vos',
//     content: "undefindeddde awokaowkoawoawk"
// },(error, post) =>{
//     console.log(error, post);
// })