const {Schema, model} = require('../connection');

const mySchema = new Schema({
    name:String,
    number:Number,
    email:String,
    title : String,
    description : String,
    address : String,
    bedrooms:Number,
    bathrooms:Number,
    // images:String,
    location : String,
    price:Number,
    image: String
});


module.exports = model( 'place' , mySchema);    