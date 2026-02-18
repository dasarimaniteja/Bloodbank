import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ChatBot from '../Components/ChatBot';
const Layout = () => {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <Navbar />
      <div className={styles.pageContent}>
        <Outlet />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Layout;
