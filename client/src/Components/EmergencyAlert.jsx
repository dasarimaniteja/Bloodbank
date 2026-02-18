import React from 'react';
import styles from './EmergencyAlert.module.css';
import { AlertOctagon, X } from 'lucide-react';
import { motion } from 'framer-motion';

const EmergencyAlert = ({ onClose }) => {
  return (
    <motion.div 
      className={styles.alertBanner}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.alertContent}>
        <AlertOctagon size={24} />
        <div className={styles.alertMessage}>
          <h4>Emergency Blood Needed!</h4>
          <p>There are urgent blood donation requests in your area. Your help could save lives!</p>
        </div>
      </div>
      <button className={styles.closeButton} onClick={onClose}>
        <X size={20} />
      </button>
    </motion.div>
  );
};

export default EmergencyAlert;
