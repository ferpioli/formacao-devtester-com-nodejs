import mongoose from 'mongoose';
import { stringify } from 'querystring';

let Movie = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Oops! name is required."],
        unique: true
        
    },
    year: Number,
    plot: String,
    cast:[String],
    is_playing: Boolean,
    created_data: {
        type: Date,
        default: Date.now
    }

});

export default mongoose.model('movie', Movie);