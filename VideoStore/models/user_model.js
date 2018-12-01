const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user_name:{
        type: String,
        require: true
    },
    password:{
        type:String,
        require: true
    }

});

module.exports = mongoose.model('users', UserSchema);