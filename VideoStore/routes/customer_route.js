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
    });
});

// Delete a Customer
router.delete('/deletecustomer/:id',(req, res, next)=>{
    Customer.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

// Get Data
router.get('/getcustomers',(req, res, next) => {
    Customer.find((err,customers)=>{
        if(err){
            res.json({
                msg: err + "Failed to retrive Movies"
            })
        }else{
            res.json(customers)
        }
    }).catch(next);
});

// Update a movie
router.put('/updatecustomer/:id',(req, res, next)=>{
    Customer.findByIdAndUpdate(req.params.id, {
        $set: {
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            Address: req.body.Address,
            City: req.body.City,
            PhoneNumber: req.body.PhoneNumber,
            Status: req.body.Status
        }
    },
    {new: true},
    function(err, updatedCustomer){
        if(err){
            res.send("Error Updating the Movie")
        }else{
            res.send(updatedCustomer + "-> Updated")
            console.log(updatedMovie)
        }
    });
})



module.exports = router;