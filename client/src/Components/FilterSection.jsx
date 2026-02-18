import React from 'react';
import styles from './FilterSection.module.css';
import { ListFilter, Droplet, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const FilterSection = ({
  showAllRequests,
  onLocationToggle,
  selectedBloodGroup,
  selectedEmergencyLevel,
  onFilterChange
}) => {
  const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const emergencyLevels = ["All", "Normal", "Moderate", "Urgent"];

  return (
    <motion.div 
      className={styles.filterSection}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className={styles.locationToggle}>
        <button 
          className={`${styles.toggleButton} ${!showAllRequests ? styles.active : ''}`}
          onClick={onLocationToggle}
        >
          <ListFilter size={18} />
          Nearby (30 km)
        </button>
        <button 
          className={`${styles.toggleButton} ${showAllRequests ? styles.active : ''}`}
          onClick={onLocationToggle}
        >
          <ListFilter size={18} />
          All Requests
        </button>
      </div>
      
      <div className={styles.filterGroup}>
        <div className={styles.filterHeader}>
          <Droplet size={18} />
          <span>Blood Group</span>
        </div>
        <div className={styles.filterOptions}>
          {bloodGroups.map(group => (
            <button
              key={group}
              className={`${styles.filterOption} ${selectedBloodGroup === group ? styles.active : ''}`}
              onClick={() => onFilterChange('bloodGroup', group)}
            >
              {group}
            </button>
          ))}
        </div>
      </div>
      
      <div className={styles.filterGroup}>
        <div className={styles.filterHeader}>
          <AlertTriangle size={18} />
          <span>Emergency Level</span>
        </div>
        <div className={styles.filterOptions}>
          {emergencyLevels.map(level => (
            <button
              key={level}
              className={`${styles.filterOption} ${styles[level.toLowerCase()]} ${selectedEmergencyLevel === level ? styles.active : ''}`}
              onClick={() => onFilterChange('emergencyLevel', level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default FilterSection;
