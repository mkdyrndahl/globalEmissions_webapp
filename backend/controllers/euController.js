const countries = require('../models/euModel.js')

exports.getCountry = async(req, res) => {
    try{
        var country = await countries.findById(req.body.id)
        res.header("Content-type", "application/json")
        res.status(200)
        res.send(country)
    } catch {
        res.status(500)
        res.send({
            message: `Cannot get EU country with id: ${req.body.id}`
        })
    }
}

exports.getCountries = async(req, res) => {
    try{
        var allCountries = await countries.find()
        res.header("Content-type", "application/json")
        res.status(200)
        res.send(allCountries)
    } catch {
        res.status(500)
        res.send({
            message: `Cannot get EU country data`
        })
    }
}

exports.addCountry = async(req, res) => {
    try {
        var newCountry = {
            country: req.body.country, a2: req.body.a2, emissions: req.body.emissions
        }
        const result = await countries.create(newCountry);
        res.header("Content-type", "application/json")
        res.status(200)
        res.send(result);
    } catch {
        res.status(500);
        res.send({ message: "Cannot add new country" })
    }
}

exports.updateCountry = async (req, res) => {
    var updatedCountry = {
        schengen: req.body.schengen, eurozone: req.body.eurozone,
            accessionDate: req.body.accessionDate, emissions: req.body.emissions
    }
    res.header("Content-Type", "application/json")
    const result = await countries.findOneAndUpdate({ country: req.body.country }, updatedCountry)
    res.send(result)
}

exports.deleteCountry = async(req, res) => {
    try {
        const result = await countries.deleteOne({ country: req.body.country });
        res.header("Content-type", "application/json")
        res.status(200);
        res.send(result);
    } catch {
        res.status(500);
        res.send({ message: `Cannot delete EU country with name: ${req.body.country}` })
    }
}