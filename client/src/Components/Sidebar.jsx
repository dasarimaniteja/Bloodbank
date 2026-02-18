import React from 'react';
import styles from './Sidebar.module.css';
import { Award, Calendar, Clock, Heart, Info, MapPin } from 'lucide-react';
import DonorSummary from './DonorSummary';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ donorData }) => {
    const navigate = useNavigate();
  const nearbyHospitals = [
    { id: 1, name: "City Hospital", distance: "2.5 km" },
    { id: 2, name: "Metro Health Center", distance: "5.1 km" },
    { id: 3, name: "LifeLine Clinic", distance: "7.3 km" }
  ];
  
  const upcomingDrives = [
    { id: 1, name: "Community Blood Drive", date: "Jun 15", location: "City Hall" },
    { id: 2, name: "Red Cross Campaign", date: "Jun 22", location: "Central Park" }
  ];
  
  const bloodFacts = [
    "One donation can save up to three lives.",
    "You can donate blood every 56 days.",
    "Blood type O- is the universal donor type."
  ];
  
  const quickLinks = [
    { name: "View Donation History", icon: <Clock size={16} />, navigate: "/donor/donationHistory" },
    { name: "Find Donation Centers", icon: <MapPin size={16} />, navigate: null },
    { name: "Edit Profile", icon: <Info size={16} />, navigate: '/donor/donorProfile' }
  ];
  
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>Your Donor Profile</h3>
        <DonorSummary donorData={donorData} />
      </div>
      
      <div className={styles.sidebarSection}>
        <div className={styles.tickerWrapper}>
          <div className={styles.ticker}>
            <span className={styles.tickerDate}>{today}:</span> 
            <span className={styles.tickerContent}>3 new emergency requests in your area</span>
          </div>
        </div>
      </div>
      
      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>Nearby Hospitals</h3>
        <ul className={styles.list}>
          {nearbyHospitals.map(hospital => (
            <li key={hospital.id} className={styles.listItem}>
              <MapPin size={16} />
              <div className={styles.listContent}>
                <span className={styles.listTitle}>{hospital.name}</span>
                <span className={styles.listSubtitle}>{hospital.distance}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>Upcoming Donation Drives</h3>
        <ul className={styles.list}>
          {upcomingDrives.map(drive => (
            <li key={drive.id} className={styles.listItem}>
              <Calendar size={16} />
              <div className={styles.listContent}>
                <span className={styles.listTitle}>{drive.name}</span>
                <span className={styles.listSubtitle}>{drive.date} · {drive.location}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>Blood Donation Facts</h3>
        <div className={styles.factBox}>
          {bloodFacts.map((fact, index) => (
            <div key={index} className={styles.fact}>
              <Heart size={16} className={styles.factIcon} />
              <p>{fact}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>Donor Status</h3>
        <div className={styles.badgeBox}>
          <div className={styles.badgeHeader}>
            <Award size={24} className={styles.badgeIcon} />
            <span className={styles.badgeTitle}>{donorData.donorLevel} Donor</span>
          </div>
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill}
                style={{ width: `${donorData.progress}%` }}
              ></div>
            </div>
            <span className={styles.progressText}>{donorData.progress}% to Gold</span>
          </div>
        </div>
      </div>
      
      <div className={styles.sidebarSection}>
        <h3 className={styles.sectionTitle}>Quick Links</h3>
        <ul className={styles.linkList}>
          {quickLinks.map((link, index) => (
            <li onClick={()=>{
                if(link.navigate) navigate(link.navigate)
            }} key={index} className={styles.linkItem}>
              {link.icon}
              <span>{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
