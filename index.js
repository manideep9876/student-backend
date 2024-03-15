const express = require('express');
const mongoose = require('mongoose');

const studentRoute = require('./routes/studentRoute.js')

const app = express();

app.use(express.json());

const port = 4080;
url= 'mongodb://localhost:27017/school'

app.listen(port, ()=>{
    console.log("server is running on port", port);
});

mongoose.connect(url).then(
    console.log("database connected")
).catch(err=>{
    console.log("db not connected");
});

app.use('/students',studentRoute)