const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userBidSchema = new Schema({

    userId: {
        type: String
    },
    id: {
        type: String
    },
    bid: {
        type: String
    }
}, { timestamps: true })



const userBid = mongoose.model('UserBid', userBidSchema)
module.exports = userBid