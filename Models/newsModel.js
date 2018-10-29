'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const NewsSchema = new Schema({
    title: String,
    content: String,
    photo: String,
    date: Date
});


module.exports = mongoose.model('News', NewsSchema);