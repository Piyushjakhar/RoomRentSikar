const mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    type: String,
    address: String,
    ammenties: String,
    contact: Number,
    price: Number
});

mongoose.model("users", userSchema);