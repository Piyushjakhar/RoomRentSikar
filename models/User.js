const mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    propertyname: String,
    type: String,
    address: String,
    ammenties: String,
    contact: Number,
    price: Number
});

mongoose.model("users", userSchema);