const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()
const passport = require('passport')
const User = require('../models/user')

router.route('/register/admin')
.post((req, res) => {


    User.register({username: 'admin'}, 'adminRoot', function(err, user) {
        if (err) {
            res.json(err)
            return
        }

        res.send('ok')

    })
})

router.route('/login')
.post((req, res) => {
    passport.authenticate('local')(req, res, function () {
        res.sendStatus(200)
    })
})

module.exports = router;
