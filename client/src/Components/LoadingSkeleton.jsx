import React from 'react';
import styles from './LoadingSkeleton.module.css';

const LoadingSkeleton = () => {
  return (
    <div className={styles.cardSkeleton}>
      <div className={styles.mapSkeleton}></div>
      <div className={styles.contentSkeleton}>
        <div className={styles.headerSkeleton}>
          <div className={styles.titleSkeleton}></div>
          <div className={styles.badgeSkeleton}></div>
        </div>
        <div className={styles.infoSkeleton}>
          <div className={styles.infoLine}></div>
          <div className={styles.infoLine}></div>
          <div className={styles.infoLine}></div>
        </div>
        <div className={styles.buttonSkeleton}></div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
