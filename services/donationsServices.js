const db = require("../config/database");

const addDonation = async (donationData) => {
    const {donor_id,blood_request_id,donation_date,status} = donationData;
    const query = `INSERT INTO donations(donor_id,blood_request_id,donation_date,status)
                    VALUES(?,?,?,?)`;
    try{
        const [row] = await db.execute(query,[donor_id,blood_request_id,donation_date,status]);
        return {id:row.insertId,...donationData};
    }catch(error){
        throw new Error(error.message);
    }
};

const getTotalDonations = async (donor_id) => {
    const [rows] = await db.execute(`SELECT COUNT(*) AS total_donations FROM donations WHERE donor_id = ? AND status = 'completed'`,[donor_id]);
    return rows[0].total;
};

const getRecentDonations = async (donor_id) => {
    const [rows] = await db.execute(`SELECT donation_date FROM donations WHERE donor_id = ? AND status = 'completed' ORDER BY donation_date DESC LIMIT 1`,[donor_id]);
    return rows[0];
};

const getDonationHistory = async (donor_id) => {
    const [rows] = await db.execute(`SELECT * FROM donations WHERE donor_id = ? ORDER BY donation_date DESC`,[donor_id]);
    return rows;
};

module.exports = {
    addDonation,
    getTotalDonations,
    getRecentDonations,
    getDonationHistory
};