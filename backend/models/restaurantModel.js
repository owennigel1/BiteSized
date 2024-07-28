const mongoose = require('mongoose')

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo_href: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    eta: {
        type: Number,
        required: true
    },
    distance_in_km: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    buy_link: {
        type: String,
        required: true
    }
}, {timestamps:true })

module.exports = mongoose.model('Restaurant', restaurantSchema)