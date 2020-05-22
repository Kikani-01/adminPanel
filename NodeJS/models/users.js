const mongoose = require('mongoose');
var User = mongoose.model('User',{
     username:{type:String},
     email:{type:String},
     password:{type:String},
     country:{type:String},
     state:{type:String},
     city:{type:String} 
});
module.exports = { User};