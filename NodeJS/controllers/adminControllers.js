const express = require('express');
var router = express.Router();
var { Admin } = require('../models/admin');
var ObjectId = require('mongoose').Types.ObjectId;

router.route('/').get((req, res) => {
    Admin.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            
            res.json(data)
        }
    })
})

router.post('/', (req, res) => {
    var login = new Admin({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        
    });
    login.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in login save:' + JSON.stringify(err, undefined, 2)); }
    });
});




module.exports = router;