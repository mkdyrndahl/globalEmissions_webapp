const mongoose = require('mongoose')

const naSchema = mongoose.Schema({
    country: String,
    emissions: String,
    a2: String
}, {
    versionKey: false
})

module.exports = mongoose.model("na", naSchema)