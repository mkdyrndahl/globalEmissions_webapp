    const countries = require('../models/naModel.js')

    exports.getCountry = async(req, res) => {
        try{
            var country = await countries.findById(req.body.id)
            res.header("Content-type", "application/json")
            res.status(200)
            res.send(country)
        } catch {
            res.status(500)
            res.send({
                message: `Cannot get NA country with id: ${req.body.id}`
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
                message: `Cannot get all NA country data`
            })
        }
    }

    exports.addCountry = async(req, res) => {
        try {
            var newCountry = {
                country: req.body.country,
                emissions: req.body.emissions,
                a2: req.body.a2
            }
            const result = await countries.create(newCountry);
            res.header("Content-type", "application/json")
            res.status(200)
            res.send(result);
        } catch (err){
            res.status(500);
            res.send({ message: err.message })
        }
    }

    exports.updateCountry = async (req, res) => {
        var updatedCountry = {
            emissions: req.body.emissions, a2: req.body.a2
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
            res.send({ message: `Cannot delete NA country with name: ${req.body.country}` })
        }
    }