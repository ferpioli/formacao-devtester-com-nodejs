import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';


import Movie from './models/movie';
const app = express();
//const mongoose = require('mongoose');
app.use(bodyparser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost/cinedb', { useNewUrlParser: true });

app.get('/movies', function (req, res) {

    let query = {}
    
    if(req.query.name){
        query.name = new RegExp(req.query.name, 'i')//like
    }

    Movie.find( query, (err, result) => {
        return res.status(200).json({ data: result });
    })
})

app.listen(3000, () => {
    console.log('cineApi esta no ar');
});

module.exports = app;