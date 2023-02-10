const { default: mongoose } = require("mongoose")
const { Schema } = mongoose

const adressSchema = Schema({
    streetName: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    postalCode: {
        type: Number,
        required: true
    },
    isDeleted: Boolean,
    date: {
        type: Date,
        default: Date()
    }
})

const adress = mongoose.model('Adress', adressSchema)

module.exports = {
    adress,
}