import React from 'react';
import styles from './DonorSummary.module.css';
import { Droplet, Calendar, Check, AlertCircle, Award } from 'lucide-react';

const DonorSummary = ({ donorData }) => {
  const { bloodType, lastDonation, eligibility, totalDonations } = donorData;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const daysSinceLastDonation = () => {
    const lastDate = new Date(lastDonation);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - lastDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className={styles.donorSummary}>
      <div className={styles.header}>
        <div className={styles.bloodBadge}>
          <Droplet size={20} />
          <span>{bloodType}</span>
        </div>
        <div className={`${styles.eligibilityBadge} ${eligibility === 'Eligible' ? styles.eligible : styles.cooldown}`}>
          {eligibility === 'Eligible' ? 
            <><Check size={16} /> Eligible to Donate</> : 
            <><AlertCircle size={16} /> Cooldown Period</>
          }
        </div>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <Calendar size={18} />
          <div>
            <span className={styles.label}>Last Donation</span>
            <span className={styles.value}>{formatDate(lastDonation)}</span>
            <span className={styles.subValue}>{daysSinceLastDonation()} days ago</span>
          </div>
        </div>

        <div className={styles.infoItem}>
          <Award size={18} />
          <div>
            <span className={styles.label}>Total Donations</span>
            <span className={styles.value}>{totalDonations}</span>
            <span className={styles.subValue}>Lives impacted: {totalDonations * 3}</span>
          </div>
        </div>
      </div>

      <div className={styles.donateToggle}>
        <label className={styles.switch}>
          <input type="checkbox" checked={true} readOnly />
          <span className={styles.slider}></span>
        </label>
        <span>Available to Donate</span>
      </div>
    </div>
  );
};

export default DonorSummary;
