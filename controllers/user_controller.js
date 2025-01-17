const express = require('express')
const bcrypt = require('bcrypt')
const users = express.Router()
const User = require('../models/user.js')

users.get('/', (req, res) => {
    User.find({}, (error, foundUser) => {
        res.json(foundUser)
    })
})

users.post('/', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser) => {
        console.log('user info has been created', createdUser);
        res.json(createdUser)
    })
})

module.exports = users;
