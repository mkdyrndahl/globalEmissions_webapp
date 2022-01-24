const express = require('express')
const router = express.Router()
const euController = require('../controllers/euController')

router.get('/euCountries', euController.getCountries)
router.get(`/euCountry`, euController.getCountry)
router.put('/adminEU', euController.updateCountry)
router.post('/adminEU', euController.addCountry)
router.delete(`/adminEU`, euController.deleteCountry)

module.exports = router