const {Schema, model} = require('../connection');

const mySchema = new Schema({
    name : String,
    address : String,
    email:String,
    DOB:Number,
    phonenumber:Number,
    type:String,
    password : String,
    

    avatar: String
});


module.exports = model( 'user' , mySchema);