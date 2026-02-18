const MedicalRecordsService = require("../services/medicalRecordServices");

const MedicalRecordsController = {
  async createMedicalRecord(req, res) {
    try {
      const newRecord = await MedicalRecordsService.createMedicalRecord(req.body);
      res.status(201).json(newRecord);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getAllMedicalRecords(req, res) {
    try {
      const records = await MedicalRecordsService.getAllMedicalRecords();
      res.status(200).json(records);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async getMedicalRecordById(req, res) {
    try {
      const record = await MedicalRecordsService.getMedicalRecordById(req.params.id);
      if (!record) {
        return res.status(404).json({ message: "Medical record not found" });
      }
      res.status(200).json(record);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async updateMedicalRecord(req, res) {
    try {
      const result = await MedicalRecordsService.updateMedicalRecord(req.params.id, req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  async deleteMedicalRecord(req, res) {
    try {
      const result = await MedicalRecordsService.deleteMedicalRecord(req.params.id);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = MedicalRecordsController;
