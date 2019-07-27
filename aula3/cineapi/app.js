import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';


import Movie from './models/movie';
const app = express();
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//const mongoose = require('mongoose');
app.use(bodyparser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost/cinedb', { useNewUrlParser: true });



app.get('/movies', function (req, res) {

    let query = {}

    if (req.query.name) {
        query.name = new RegExp(req.query.name, 'i')//like
    }

    Movie.find(query, {}, { sort: '-date' }, (err, result) => {
        return res.status(200).json({ data: result });
    })
})

app.get('/movies/:id', function (req, res) {
    let id = req.params.id
    Movie.findById({ _id: id }, {}, { sort: '-date' }, (err, result) => {
        if (!result) {
            return res.status(404).send(null);
        } else {
            return res.status(200).json({ data: result });
        }



    })

})

app.delete('/movies/:id', function (req, res) {
    Movie.findOneAndDelete({ _id: req.params.id }, (err, result) => {
        console.log(result);
        if (!result) {
            return res.status(200).send(null);
        } else {
            return res.status(404).send(null);
        }
    })
})

app.post('/movies', function (req, res) {
    let movie = new Movie(req.body)

    movie.save((err, data) => {
        if (!err) {
            return res.status(200).json({ data: data })

        }
        if (err.name === "ValidationError") {
            return res.status(400).json(err)
        }
        return res.status(500).json(err)

    })

})

app.listen(3000, () => {
    console.log('cineApi esta no ar');
});

module.exports = app;