const { default: mongoose } = require("mongoose")
const { Schema } = mongoose

const orderSchema = Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    categoryId: {
        type: 'ObjectId',
        ref: 'Category'
    },
    buyerId: {
        type: 'ObjectId',
        ref: 'Buyer'
    },
    isDeleted: Boolean,
    date: {
        type: Date,
        default: Date()
    }
})

const order = mongoose.model('Order', orderSchema)

module.exports = {
    order,
}