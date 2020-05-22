const express = require('express');
var router = express.Router();
var { Reset } = require('../models/reset');
var ObjectId = require('mongoose').Types.ObjectId;

ObjectIdnew = require('mongodb').ObjectID;
router.route('/').get((req, res) => {
    Reset.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})



router.post('/changePassword', (req, res) => {
    var rst = new Reset({
        
        email: req.body.email,
        password:req.body.password,
        newpassword: req.body.newpassword,
        
    });
    rst.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User save:' + JSON.stringify(err, undefined, 2)); }
    });
});

// router.post('/', (req, res) => {
//     var usr = new User({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//         country: req.body.country,
//         state: req.body.state,
//         city: req.body.city
//     });
//     usr.save((err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in User save:' + JSON.stringify(err, undefined, 2)); }
//     });
// });

router.put('/:id', (req, res) => {

    
    console.log('******',req.params.id)
    Reset.findOneAndUpdate(req.params.id, { $set: { password :newpassword } }, { new: true }, (err, doc) => {
        if (!err) { 
        console.log('sucess',doc)
            res.send(doc); 
        }
        else { console.log('Error in User Update:' + JSON.stringify(err, undefined, 2)); }

    });
});


module.exports = router;



