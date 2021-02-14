const mongoose =require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    propertyname: String,
    type: String,
    address: String,
    ammenties: String,
    contact: String,
    price: Number
});

mongoose.model("Property", userSchema);