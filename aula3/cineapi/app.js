import express from 'express';
import bodyparser from'body-parser';
//import mongoose from 'mongoose';

const app = express();
const mongoose = require('mongoose');
app.use(bodyparser.urlencoded({extended: false}));
mongoose.connect('mongdb://localhost/cinedb', { useNewUrlParser: true });

app.listen(3000, ()=>{
    console.log('cineApi esta no ar');
});
