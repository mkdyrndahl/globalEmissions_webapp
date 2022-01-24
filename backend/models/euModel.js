const mongoose = require('mongoose')

const euSchema = mongoose.Schema({
    country: String,
    emissions: String,
    a2: String
}, {
    versionKey: false
})

module.exports = mongoose.model("eu", euSchema)