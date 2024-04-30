const express = require("express")
const EstateController = require("../controllers/estate.controller")
const router = express.Router()

router.get('/estates/', EstateController.getAllEstates)
router.get('/estate/:id', EstateController.getOneEstate)
router.get('/estates/:availableFor', EstateController.getEstateByAvailableFor)
router.post('/estate/', EstateController.createEstate)
router.put('/estate/:id', EstateController.updateEstate)
router.delete('/estate/:id', EstateController.deleteEstate)

module.exports = {
    estateRouter: router
}