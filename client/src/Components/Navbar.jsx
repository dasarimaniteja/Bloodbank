import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, User, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './Nav.module.css';
import { useDarkMode } from '../Context/DarkModeContext';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogo = () => {
    if (location.pathname === '/donor') {
      window.location.reload();
    } else {
      navigate('/donor');
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <h1 onClick={handleLogo} className={styles.logo}>AuraHP</h1>
      </div>

      <div className={styles.navRight}>
        <motion.div
          className={styles.darkModeToggle}
          onClick={toggleDarkMode}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className={styles.toggleCircle}
            animate={{
              x: isDarkMode ? 30 : 0,
              background: isDarkMode ? '#f1c40f' : '#ffffff'
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {isDarkMode ? <Sun size={18} color="#1a1f36" /> : <Moon size={18} color="#1a1f36" />}
          </motion.div>
        </motion.div>

        <button className={styles.iconButton} onClick={() => navigate('/notifications')}>
          <Bell size={24} />
          <span className={styles.notificationBadge}>3</span>
        </button>

        <button className={styles.iconButton} onClick={() => navigate('/donor/donorProfile')}>
          <User size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;