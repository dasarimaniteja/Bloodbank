const db = require("../config/database");

const medicalRecordsTable = `
CREATE TABLE IF NOT EXISTS medicalRecords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    donor_id INT NOT NULL,
    blood_group ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') NOT NULL,
    verified BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (donor_id) REFERENCES donor(id) ON DELETE CASCADE
);
`;

const createMedicalRecordsTable = async() => {
    try{
        await db.execute(medicalRecordsTable);
    }catch(error){
        console.error("Error creating medicalRecords table:",error.message);
    }
}

module.exports ={ createMedicalRecordsTable};
