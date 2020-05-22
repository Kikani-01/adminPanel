const express = require('express');
var router = express.Router();
var { User } = require('../models/users');
var ObjectId = require('mongoose').Types.ObjectId;

router.route('/').get((req, res) => {
    User.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})



router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in retriving Message:' + JSON.stringify(err, undefined, 2)); }
    });
});
router.post('/', (req, res) => {
    var usr = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city
    });
    usr.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User save:' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id: ${req.params.id}`);
    var usr = ({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city
    });
    User.findByIdAndUpdate(res.params.id, { $set: usr }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update:' + JSON.stringify(err, undefined, 2)); }

    });
});


router.delete('/:id',(req,res)=>{
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id: ${req.params.id}`);
    
    User.findOneAndRemove(req.params.id, (err,doc)=>{
        if (!err) { res.send(doc); }
        else { console.log('Error in User Delete:' + JSON.stringify(err, undefined, 2)); }

    });
});


// router.route('/').post((req, res) => {
//     var usr = new User({
//         username: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         country: req.body.country,
//         state: req.body.state,
//         city: req.body.city
//     });
//     usr.save((error,data => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     }));
// });

module.exports = router;