const mongoose = require('mongoose')

const EstateSchema =  new mongoose.Schema({
    title: {
        type: String,
        required: [true, "The estate needs a title"],
        minlength: [5, "The title must be at least 5 characters long"]
    },
    description: {
        type: String,
        required: [true, "The estate needs a description"],
        minlength: [20, "The description must be at least 20 characters long"]
    },
    owner: {
        type: String,
        required: [true, "The estate needs an owner"],
    },
    address: {
        type: String,
        required: [true, "The estate needs an address"],
    },
    coordinates: {
        type: Object,
        required: [true, "The estate needs coordinates"],
    },
    price: {
        type: Number,
        required: [true, "The estate needs a price"],
    },
    images: [{
        type: String,
        required: [true, "The estate needs images"],
    }],
    bedrooms: {
        type: Number,
        required: [true, "The estate needs a bedroom number"],
    },
    bathrooms: {
        type: Number,
        required: [true, "The estate needs a bathroom number"],
    },
    rooms: {
        type: Number,
        required: [true, "The estate needs a room number"],
    },
    availableFor: {
        type: String,
        enum: ['sale', 'rent'],
        required: [true, "The estate needs a availableFor"],
    },
}, {timestamps: true})

module.exports.Estate = mongoose.model('Estate', EstateSchema)