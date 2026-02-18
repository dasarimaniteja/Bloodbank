import React from 'react';
import { Calendar, MapPin, Droplet, Award } from 'lucide-react';
import styles from './donor_history.module.css';

const DonationHistory = () => {
  const donations = [
    {
      id: 1,
      date: "2024-02-15",
      hospital: "City Hospital",
      bloodType: "O+",
      units: 1,
      status: "Completed",
      impact: "Helped 3 lives"
    },
    {
      id: 2,
      date: "2023-12-10",
      hospital: "Metro Health Center",
      bloodType: "O+",
      units: 1,
      status: "Completed",
      impact: "Helped 3 lives"
    },
    {
      id: 3,
      date: "2023-09-05",
      hospital: "LifeLine Clinic",
      bloodType: "O+",
      units: 1,
      status: "Completed",
      impact: "Helped 3 lives"
    }
  ];

  return (
    <div className={styles.historyContainer}>
      <div className={styles.statsSection}>
        <div className={styles.statCard}>
          <Droplet size={24} />
          <h3>Total Donations</h3>
          <p>5 Units</p>
        </div>
        <div className={styles.statCard}>
          <Award size={24} />
          <h3>Lives Impacted</h3>
          <p>15 People</p>
        </div>
        <div className={styles.statCard}>
          <Calendar size={24} />
          <h3>Last Donation</h3>
          <p>15 Feb 2024</p>
        </div>
      </div>

      <div className={styles.timeline}>
        {donations.map((donation, index) => (
          <div key={donation.id} className={styles.timelineItem}>
            <div className={styles.timelineDate}>
              <Calendar size={16} />
              {donation.date}
            </div>
            <div className={styles.timelineCard}>
              <div className={styles.cardHeader}>
                <h3>{donation.hospital}</h3>
                <span className={styles.status}>{donation.status}</span>
              </div>
              <div className={styles.cardContent}>
                <p>
                  <Droplet size={16} />
                  <span>Blood Type: {donation.bloodType}</span>
                </p>
                <p>
                  <MapPin size={16} />
                  <span>Units Donated: {donation.units}</span>
                </p>
                <p>
                  <Award size={16} />
                  <span>{donation.impact}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationHistory;