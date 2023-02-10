const { default: mongoose } = require("mongoose")
const { Schema } = mongoose

const userSchema = Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: Boolean,
    date: {
        type: Date,
        default: Date()
    }
})

const user = mongoose.model('User', userSchema)

module.exports = {
    user,
}