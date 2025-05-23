const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://unsplash.com/photos/sunset-over-mountains-and-a-still-lake-7eeTeRSxY0g",
        set: (v) => 
            v==="" ? 
        "https://unsplash.com/photos/sunset-over-mountains-and-a-still-lake-7eeTeRSxY0g" 
        : v,
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;