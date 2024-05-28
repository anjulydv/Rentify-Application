const express = require("express");

const userRouter = require('./routers/placeRouter');
const placeRouter = require('./routers/placeRouter');
const utilRouter = require('./routers/util');


const cors = require('cors')


const app = express();
const port = 5000;


app.use(express.json());

app.use(cors({
    origin: '*'
}))

app.use('/user', userRouter);
app.use('/place', placeRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));



app.get('/', (req, res) => {
    res.send('Response from express');
});
app.get('/add', (req, res) => {
    res.send('Response from add');
});
app.get('/getall', (req, res) => {
    res.send('Response from getall');
});
app.get('/delete', (req, res) => {
    res.send('Response from delete');
});


app.listen(port, () => { console.log('express server started at 5000') });



