const mongoose = require('mongoose');
var Admin = mongoose.model('Admin',{
     username:{type:String},
    email:{type:String},
     password:{type:String},
     
});
module.exports = { Admin };