const express = require("express");
const MedicalRecordsController = require("../controllers/medicalRecordController");

const router = express.Router();

router.post("/medical-records", MedicalRecordsController.createMedicalRecord);
router.get("/medical-records", MedicalRecordsController.getAllMedicalRecords);
router.get("/medical-records/:id", MedicalRecordsController.getMedicalRecordById);
router.put("/medical-records/:id", MedicalRecordsController.updateMedicalRecord);
router.delete("/medical-records/:id", MedicalRecordsController.deleteMedicalRecord);

module.exports = router;
