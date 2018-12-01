const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
//use cross-origin domains
app.use(cors());
const dbConnect = 'mongodb://project1:project123@ds117834.mlab.com:17834/comp3123_project_database';

const port = 3000;

// Connect to database
mongoose.connect(dbConnect);

// On Database connection return true
mongoose.connection.on('connected', () =>{
    console.log("connected to Database ")
})
// or throw err
mongoose.connection.on('error', (err)=>{
    if(err){
        console.log('error in DB connection => '+ err)
    }
})

//defining routes
const vRoutes = require('./routes/video_route');
const vCustomer = require('./routes/customer_route');
const vUser = require('./routes/user_route');



// Convert body parser to Json 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Routes to handle requests
app.use('/api',vRoutes);
app.use('/api', vCustomer);
app.use('/admin', vUser);

// Listning to port
app.listen(port,()=>{
    console.log(`Listning to port ${port}`);
})
