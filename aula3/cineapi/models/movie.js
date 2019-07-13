import mongoose from 'mongoose';

let Movie = new mongoose.Schema({
    name: String,
    year: Number,
    plot: String,
    cast: [String],
    is_playing: Boolean,
    created_data:{
        type: Date,
        default: Date.now
    }

});

export default mongoose.model('movie', Movie);