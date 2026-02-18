const db = require("../config/database");

const MedicalRecordsService = {
  async createMedicalRecord({ donor_id, blood_group, verified }) {
    try {
      const [result] = await db.execute(
        `INSERT INTO medicalRecords (donor_id, blood_group, verified) VALUES (?, ?, ?)`,
        [donor_id, blood_group, verified]
      );
      return { id: result.insertId, donor_id, blood_group, verified };
    } catch (error) {
      throw new Error("Failed to create medical record: " + error.message);
    }
  },

  async getAllMedicalRecords() {
    try {
      const [rows] = await db.execute(`SELECT * FROM medicalRecords`);
      return rows;
    } catch (error) {
      throw new Error("Failed to fetch medical records: " + error.message);
    }
  },

  async getMedicalRecordById(id) {
    try {
      const [rows] = await db.execute(`SELECT * FROM medicalRecords WHERE id = ?`, [id]);
      return rows[0];
    } catch (error) {
      throw new Error("Failed to fetch medical record: " + error.message);
    }
  },

  async updateMedicalRecord(id, { verified }) {
    try {
      await db.execute(`UPDATE medicalRecords SET verified = ? WHERE id = ?`, [verified, id]);
      return { message: "Medical record updated successfully" };
    } catch (error) {
      throw new Error("Failed to update medical record: " + error.message);
    }
  },

  async deleteMedicalRecord(id) {
    try {
      await db.execute(`DELETE FROM medicalRecords WHERE id = ?`, [id]);
      return { message: "Medical record deleted successfully" };
    } catch (error) {
      throw new Error("Failed to delete medical record: " + error.message);
    }
  }
};

module.exports = MedicalRecordsService;
