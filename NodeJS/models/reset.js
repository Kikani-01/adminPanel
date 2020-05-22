const mongoose = require('mongoose');
var Reset = mongoose.model('Reset', {
     cupassword:{type:String},
    //  email:{type:String},
     newpassword:{type:String},
     copassword:{type:String}
     
});
module.exports = { Reset };