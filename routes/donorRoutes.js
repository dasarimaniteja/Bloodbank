const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donorController');

router.post("/donors", donorController.createDonor);
router.get("/donors", donorController.getDonors);
router.get("/donors/:email", donorController.getDonorByEmail);
router.get("/donors/search", donorController.searchDonors);
router.put("/donors/:id", donorController.updateDonor);
router.delete("/donors/:id", donorController.deleteDonor);
router.post("/donors/authdonor", donorController.AuthDonor);
router.post("/donors/updatelocation", donorController.updateLiveLocation);

module.exports = router;
