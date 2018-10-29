'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const UserSchema = new Schema({
    name: String,
    password: String,
    email: String,
    nick: String,
    age: Number
});

module.exports = mongoose.model('User', UserSchema);