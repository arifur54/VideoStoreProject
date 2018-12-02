const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user_name:{
        type: String,
        require: 'Username can\'t be empty'
    },
    password:{
        type:String,
        require: 'Password cant\'t be empty '
    }

});

module.exports = mongoose.model('users', UserSchema);