const { default: mongoose } = require("mongoose")
const { Schema } = mongoose

const categorySchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    isDeleted: Boolean,
    date: {
        type: Date,
        default: Date()
    }
})

const category = mongoose.model('Category', categorySchema)

module.exports = {
    category,
}