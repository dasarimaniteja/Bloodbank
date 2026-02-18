import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useDarkMode } from '../Context/DarkModeContext';
import Sidebar from './Side';
import styles from './Nav.module.css';
import { Home, ClipboardList, Users, Activity, Settings, Info } from 'lucide-react';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogo = () => {
    if (location.pathname === '/bloodbank') {
      window.location.reload();
    } else {
      navigate('/bloodbank');
    }
  };


  const menuItems = [
    { icon: Home, label: 'Dashboard', navigate: '/bloodbank' },
    { icon: ClipboardList, label: 'Blood Requests', navigate: '/bloodbank/bloodRequests' },
    { icon: Users, label: 'Donors List', navigate: '/bloodbank/donorsList' },
    { icon: Activity, label: 'Analytics', navigate: '/bloodbank/analytics' },
    { icon: Settings, label: 'Settings', navigate: '#' },
    { icon: Info, label: 'About', navigate: '/about' },
  ];
  

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <button className={styles.hamburgerButton} onClick={() => setIsSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <h1 onClick={handleLogo} className={styles.logo}>AuraHP Facility</h1>
        </div>
      <div className = {styles.navRight}>
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
      </div>
      </nav>
      <AnimatePresence>
      {isSidebarOpen && <Sidebar menuItems={menuItems} onClose={() => setIsSidebarOpen(false)} title='Menu' />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
