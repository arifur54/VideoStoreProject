const express = require('express');
const router = express.Router();

const User = require('../models/user_model');


//add user 
router.post('/adduser',(req,res,next)=>{
    let newUser = new User({
        user_name: req.body.user_name,
        password: req.body.password,
    });

    User.create(newUser,(err)=>{
        if(err){
            res.json({
                msg: err + " -> Cannot Add Movie"
            })
        }else{
            res.json({
                msg: newUser.user_name + " -> Added"
            })
        }
    });
});

// Get user
router.get('/getuser', (req, res, next)=>{
    User.find((err, user)=>{
        if(err){
            res.json({
                msg: "User Not Found"
            })
        }else{
            res.json({user});
        }
    })
})


// export module
module.exports = router;