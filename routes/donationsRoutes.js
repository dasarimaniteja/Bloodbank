const express = require('express');
const router = express.Router();
const donationsController = require('../controllers/donationsController');

router.post("/donations",donationsController.addDonation);
router.get("/donations/:donor_id/recent",donationsController.getRecentDonations);
router.get("/donatoins/:donor_id/total",donationsController.getTotalDonations);
router.get("/donations/:donor_id/history",donationsController.getDonationHistory);

module.exports = router;