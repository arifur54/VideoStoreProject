const express = require('express');
const router = express.Router();

const Movies = require('../models/video_model');

//Add Data
router.post('/addmovie',(req,res,next)=>{
    let newMovies = new Movies({
        Title: req.body.Title,
        RunTime: req.body.RunTime,
        Gen: req.body.Gen,
        Rating: req.body.Rating,
        Director: req.body.Director,
        Status: req.body.Status
    })

    Movies.create(newMovies,(err)=>{
        if(err){
            res.json({
                msg: err + " -> Cannot Add Movie"
            })
        }else{
            res.json({
                msg: newMovies.Title + " -> Added"
            })
        }
    });
});

// Get Data
router.get('/getmovies',(req, res, next) => {
    Movies.find((err,movies)=>{
        if(err){
            res.json({
                msg: err + "Failed to retrive Movies"
            })
        }else{
            res.json(movies)
        }
    })
})

// Get Specific Movie
router.get('/getamovie/:id', (req, res, next) =>{
    Movies.findById({_id: req.params.id}, (err, result) => {
        if(err){
            res.json({
                msg: "Failed to Retrive " + result
            })
        }else{
            res.json(result)
        }
    });
});

// deleting a movie
router.delete('/deletemovie/:id',(req, res, next)=>{
    Movies.remove({_id: req.params.id}, function(err, result){
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});

// Update a movie
router.put('/updatemovie/:id',(req, res, next)=>{
    Movies.findByIdAndUpdate(req.params.id, {
        $set: {
            Title: req.body.Title,
            RunTime: req.body.RunTime,
            Gen: req.body.Gen,
            Rating: req.body.Rating,
            Director: req.body.Director,
            Status: req.body.Status
        }
    },
    {new: true}
    ).then(
        result =>{
            res.json(result)
        }
    ).catch(err => {
        res.json(err);
    })
})

router.put('/reserve/:id', (req, res, next) => {
    Movies.findByIdAndUpdate(req.params.id,{
        $set:{
            Status: req.body.Status = "Unavailable"
        }
    },{new: true}
    ).then(
        result => {
            res.json(result)
        }
    ).catch(err => {
        res.json(err)
    })
});



module.exports = router;