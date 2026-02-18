const db = require("../config/database");

const donationsTable = `
CREATE TABLE IF NOT EXISTS donations (
   id INT AUTO_INCREMENT PRIMARY KEY,
   donor_id INT NOT NULL,
   blood_request_id INT,
   donation_date DATE DEFAULT (CURRENT_DATE),
   status ENUM('Pending','Completed','Cancelled') DEFAULT 'Pending',
   FOREIGN KEY (donor_id) REFERENCES donor(id) ON DELETE CASCADE,
   FOREIGN KEY (blood_request_id) REFERENCES bloodRequests(id) ON DELETE CASCADE,
   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

const createDonationsTable = async() => {
    try {
        await db.execute(donationsTable);
        console.log("Donations table created successfully");
    }catch(error){
        console.log("Error creating donations table",error.message);
    }
};

module.exports = {createDonationsTable};
