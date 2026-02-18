const donationService = require('../services/donationsServices');

const addDonation = async(req,res)=>{
    try{
        const donationData = req.body;
        console.log(donationData);
        if(!donationData) return res.status(400).json({message:"Donor Data is required"});
        const donation = await donationService.addDonation(donationData);
        res.status(201).json({message:"Donation added successfully",donation});
    }catch(error){
        console.error("Error adding donation",error);
        res.status(500).json({message:"Internal server error"});
    }
};

const getTotalDonations = async(req,res)=>{
    try{
        const {donor_id} = req.body;
        if(!donor_id) return res.status(400).json({message:"Donor Id is required!"});
        const TotalDonations = await donationService.getTotalDonations(donor_id);
        res.status(201).json({message:"Fetched total donations Successfully",TotalDonations});
    }catch(error){
        console.error("Error while fetching Total Donations of a Donor",error);
        res.status(500).json({message:"Internal server error"});
    }
};

const getRecentDonations = async(req,res) =>{
    try{
        const {donor_id} =req.body;
        if(!donor_id) return res.status(400).json({message:"Donor Id is required"});
        const RecentDonations = await donationService.getRecentDonations(donor_id);
        res.status(201).json({message:"Fetched Recent Donations Successfully",RecentDonations});
    }catch(error){
        console.error("Error while fetching recent donations",error);
        res.status(500).json({message:"Internal server error"});
    }
};

const getDonationHistory = async (req,res) =>{
    try{
        const {donor_id} = req.body;
        if(!donor_id) return res.status(400).json({message:"Donor Id is required"});
        const getDonationHistory = donationService.getDonationHistory(donor_id);
        res.status(201).json({message:"Fetched Donation history successfully"});
    }catch(error){
        console.error("error while fetching Donation History",error);
        res.status(500).json({message:"Internal server error"});
    }
};

module.exports = {
    addDonation,
    getTotalDonations,
    getRecentDonations,
    getDonationHistory
};