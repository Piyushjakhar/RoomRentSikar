const mongoose = require('mongoose');
const URL = "mongodb://test:test@cluster0-shard-00-00.awut9.mongodb.net:27017,cluster0-shard-00-01.awut9.mongodb.net:27017,cluster0-shard-00-02.awut9.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-1m9f1y-shard-0&authSource=admin&retryWrites=true&w=majority"
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