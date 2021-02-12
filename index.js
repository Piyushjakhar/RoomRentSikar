const express = require('express');
const mongoose = require('mongoose');
const URL = "mongodb+srv://sikar:nopassword@cluster0.awut9.mongodb.net/Sikar?retryWrites=true&w=majority";

mongoose.connect(URL)
.then(()=>{
    console.log("connected to database");
})
.catch ((err)=>{
    console.log(`Error connecting to database \n${err}`);
})


