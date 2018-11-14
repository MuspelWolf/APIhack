'use strict'

const User = require('../Models/userModel');
const config = require('../config');
const bcrypt = require('bcrypt-nodejs');

function signUp(req,res){
    let name = req.body.name;
    let password = req.body.password;
    let nick = req.body.nick;
    let email = req.body.email;

    const user = new User({
        name: name,
        password: password,
        nick: nick,
        email: email
    });
    user.save((err, user)=>{
        if(err){
            console.log(err);
            return res.status(500).send({
                error: true,
                message:'Error in database',
                data: {}
            });
        }
        if(!user) return res.status(500).send({
            error: true,
            message: 'Server error saving user',
            data: {}
        });
        return res.status(200).send({
            error: false,
            message: 'User created',
            data: {}
        });
    });
}

function login(req, res){
    if(!req.body.password) return res.status(400).send({
        error: true,
        message: 'Password is not valid',
        data:{}
    });
    User.findOne({email: req.body.email})
    .select('+password').exec((err, user)=>{
        if(err) return res.status(500).sendI({
            error: true,
            message: 'Server error',
            data:{}
        });
        if(!user) return res.status(404).send({
            error: true,
            message: 'Wrong user/password',
            data:{}
        });

        bcrypt.compare(req.body.password, user.password,(err, equals)=>{
            if(err) return res.status(500).send({
                error: true,
                message: 'Server error',
                data: {}
            })
            if(!equals) return res.status(404).send({
                error: true,
                message:'Wrong user/password',
                data:{}
            });
            user.password = undefined;
            return res.status(200).send({
                token: token.generate(user),
                user: user
            });
        });
    });
}

function getUserData(req, res) {
    User.findById(req.user)
        .select('-_id')
        .exec((err, user) => {
            if (err) return res.status(500).send({
                error: true,
                message: 'Error del servidor',
                data: {}
            });
            if (!user) return res.status(404).send({
                error: true,
                message: 'Usuario no encontrado',
                data: {}
            });
            return res.status(200).send(user);
        });
}

function getUserData(req, res) {
    User.findById(req.user)
        .select('-_id')
        .exec((err, user) => {
            if (err) return res.status(500).send({
                error: true,
                message: 'Error del servidor',
                data: {}
            });
            if (!user) return res.status(404).send({
                error: true,
                message: 'Usuario no encontrado',
                data: {}
            });
            return res.status(200).send(user);
        });
}

function deleteUser(req, res) {
    let userId = req.params.id;

    User.findById(userId, (err, user) => {
        if (err) return res.status(500).send({
            error: true,
            message: 'Error del servidor',
            data: {}
        });
        if (!user) return res.status(404).send({
            error: true,
            message: 'Usuario no encontrado',
            data: {}
        });
        user.remove();
        return res.sendStatus(200);
    });
}

module.exports = {
    signUp,
    login,
    getUserData,
    deleteUser
}
