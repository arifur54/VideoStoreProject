const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({
    Title:{
        type: String,
        requrie: true
    },
    RunTime:{
        type: String,
        require: true
    },
    Gen:{
        type: String,
        require: true
    },
    Rating:{
        type: String,
        require: true
    },
    Director:{
        type: String,
        require: true
    },
    Status:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Movies', MovieSchema);