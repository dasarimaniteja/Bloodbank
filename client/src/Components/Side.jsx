import React, { useState } from 'react';
import styles from './Side.module.css';
import { 
  Home, Droplet, Users, PieChart, 
  Settings, Info, Menu, ChevronRight 
} from 'lucide-react';

const Sidebar = ({ activeView, onViewChange }) => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  const handleViewClick = (view) => {
    onViewChange(view);
    if (window.innerWidth < 768) {
      setExpanded(false);
    }
  };

  return (
    <nav 
      className={`${styles.sidebar} ${expanded ? styles.expanded : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.logo}>
        {expanded ? (
          <h1>AuraHP</h1>
        ) : (
          <Droplet className={styles.logoIcon} />
        )}
      </div>

      <div className={styles.toggleButton}>
        {expanded ? (
          <ChevronRight />
        ) : (
          ""
        )}
      </div>

      <ul className={styles.navItems}>
        <li 
          className={`${styles.navItem} ${activeView === 'dashboard' ? styles.active : ''}`}
          onClick={() => handleViewClick('dashboard')}
        >
          <Home className={styles.icon} />
          <span className={styles.label}>Dashboard</span>
        </li>
        
        <li 
          className={`${styles.navItem} ${activeView === 'bloodRequests' ? styles.active : ''}`}
          onClick={() => handleViewClick('bloodRequests')}
        >
          <Droplet className={styles.icon} />
          <span className={styles.label}>Blood Requests</span>
        </li>
        
        <li 
          className={`${styles.navItem} ${activeView === 'donors' ? styles.active : ''}`}
          onClick={() => handleViewClick('donors')}
        >
          <Users className={styles.icon} />
          <span className={styles.label}>Donors</span>
        </li>
        
        <li 
          className={`${styles.navItem} ${activeView === 'analytics' ? styles.active : ''}`}
          onClick={() => handleViewClick('analytics')}
        >
          <PieChart className={styles.icon} />
          <span className={styles.label}>Analytics</span>
        </li>
        
        <li 
          className={`${styles.navItem} ${activeView === 'settings' ? styles.active : ''}`}
          onClick={() => handleViewClick('settings')}
        >
          <Settings className={styles.icon} />
          <span className={styles.label}>Settings</span>
        </li>
        
        <li 
          className={`${styles.navItem} ${activeView === 'about' ? styles.active : ''}`}
          onClick={() => handleViewClick('about')}
        >
          <Info className={styles.icon} />
          <span className={styles.label}>About</span>
        </li>
      </ul>

      <div className={styles.facilityInfo}>
        {expanded && (
          <>
            <div className={styles.facilityAvatar}>MC</div>
            <div className={styles.facilityDetails}>
              <h3>Medical Center</h3>
              <p>Admin</p>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;