const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    
    description: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        ref: 'User',
        required: true
    }
    
})

const blog = mongoose.model('Blog', blogSchema)
module.exports = blog