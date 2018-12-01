const express = require('express');
const router = express.Router();

const Customer = require('../models/customer_model');

//Add Data
router.post('/addcustomer',(req,res,next)=>{
    let newCustomer = new Customer({
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Address: req.body.Address,
        City: req.body.City,
        PhoneNumber: req.body.PhoneNumber,
        Status: req.body.Status
    });

    Customer.create(newCustomer,(err)=>{
        if(err){
            res.json({
                msg: err + " -> Cannot Add Movie"
            })
        }else{
            res.json({
                msg: newCustomer.FirstName + " -> Added"
            })
        }
    }).catch(next);
});


// Get Data
router.get('/getcustomers',(req, res, next) => {
    Customer.find((err,customers)=>{
        if(err){
            res.json({
                msg: err + "Failed to retrive Movies"
            })
        }else{
            res.json({customers})
        }
    }).catch(next);
});

module.exports = router;