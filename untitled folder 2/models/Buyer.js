const { default: mongoose } = require("mongoose")
const { Schema } = mongoose

const buyerSchema = Schema({
    buyerName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    buyerAdress: {
        type:'ObjectId',
        ref:'Adress'
    },
    isDeleted: Boolean,
    date: {
        type: Date,
        default: Date()
    }
})

const buyer = mongoose.model('Buyer', buyerSchema)

module.exports = {
    buyer,
}