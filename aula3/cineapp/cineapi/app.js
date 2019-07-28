import express from 'express';
import bodyparser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import crud from "./crud";


import Movie from './models/movie';
const app = express();

app.use(cors({
    origins: ["*"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
}))
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//const mongoose = require('mongoose');
app.use(bodyparser.urlencoded({ extended: false }));
mongoose.connect('mongodb://localhost/cinedb', { useNewUrlParser: true });



app.get('/movies', crud.list);

app.get('/movies/:id', crud.get);
   
app.delete('/movies/:id', crud.remove);
   
app.post('/movies', crud.create);

app.put('/movies/:id', crud.update)
 




app.listen(3000, () => {
    console.log('cineApi esta no ar');
});

module.exports = app;