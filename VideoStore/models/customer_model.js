const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    FirstName:{
        type: String,
        requrie: true
    },
    LastName:{
        type: String,
        require: true
    },
    Address:{
        type: String,
        require: true
    },
    City:{
        type: String,
        require: true
    },
    PhoneNumber:{
        type: String,
        require: true
    },
    Status:{
        type: String,
        require: true
    }    
})

module.exports = mongoose.model('customer', CustomerSchema);