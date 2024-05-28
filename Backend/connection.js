 const mongoose = require('mongoose');

const url ="mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/tourandtravels?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url)
.then((result) => {
    console.log('database connected successfully');
    // console.log(result);
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;
