const mongoose = require('mongoose');
const URL = "mongodb+srv://test:test@cluster0.awut9.mongodb.net/RoomRentSikar?retryWrites=true&w=majority";

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