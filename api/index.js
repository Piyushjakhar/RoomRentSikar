const express = require('express');
const mongoose = require('mongoose');
const URL = "mongodb+srv://test:test@cluster0.awut9.mongodb.net/RoomRentSikar?retryWrites=true&w=majority";
const bodyparser = require("body-parser");

//Setting Up Models
require('./models/User');


const parameters = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(URL,parameters)
.then(()=>{
    console.log("connected to database");
})
.catch ((err)=>{
    console.log(`Error connecting to database \n${err}`);
})

const app =express();
const port=4000;

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true })); 


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, ()=>{
    console.log("server is started on port "+port);
});

app.post("/adduser", (req,res)=>{
    //Fetch User Model
    const User = mongoose.model('Property');

    var userdata = new User(req.body);

    userdata.save()
    .then(item =>{
        res.send("item saved to database");
    })
    .catch (err =>{
        res.status(400).send("unable to save to database");
    });
});