import mongoose from 'mongoose';

let Movie = new mongoose.Schema({
    name: String,
    year: Number,
    plot: String,
    cast: [String],
    is_playing: Boolean

})

export default mongoose.model('movie', Movie);