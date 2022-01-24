const express = require('express')
const router = express.Router()
const naController = require('../controllers/naController')

router.get('/naCountries', naController.getCountries)
router.get(`/naCountry`, naController.getCountry)
router.put('/adminNA', naController.updateCountry)
router.post('/adminNA', naController.addCountry)
router.delete(`/adminNA`, naController.deleteCountry)

module.exports = router