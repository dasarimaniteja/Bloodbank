const db = require('../config/database');

const bloodRequestsTable = `
CREATE TABLE IF NOT EXISTS bloodRequests (
id int AUTO_INCREMENT PRIMARY KEY,
facility_id int NOT NULL,
blood_group ENUM('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-') NOT NULL,
units int NOT NULL,
urgency ENUM('Urgent', 'Within 24 hours', 'Within 3 days', 'Within a week') NOT NULL,
type ENUM('live_blood','store_blood') NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
address varchar(30),
contactNumber varchar(12),
facilityName varchar(30),
notes varchar(200) ,
patientName varchar(30),
patientAge int,
FOREIGN KEY (facility_id) REFERENCES facility(id) ON DELETE CASCADE
);
`;

const createBloodRequestsTable = async() => {
    try{
        await db.execute(bloodRequestsTable);
    }catch(error){
        console.error("Error creating bloodRequests table:",error.message);
    }
};

module.exports = {createBloodRequestsTable};
