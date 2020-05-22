const mongoose = require('mongoose');
MONGO_URI = "mongodb://127.0.0.1:27017/CrudDB";


mongoose.connect(MONGO_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('MongoDB connection succeeded!!.'))
    .catch(err => {
        console.log('DB not connected!');
    });
module.exports = mongoose;