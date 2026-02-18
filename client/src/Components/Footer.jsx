import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import styles from './footer.module.css'
const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className= {styles.topSection}>
          <div className= {styles.headesc}>
            <h3 className={styles.heading}>AuraHP</h3>
            <p className={styles.description}>One Drop at a Time</p>
          </div>

          <div className={styles.iconGroup}>
            <a href="https://github.com/bharadwaj-dasari/Aura" className={styles.iconLink}>
              <FaGithub size={20} />
            </a>
            <a href="#" className={styles.iconLink}>
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com/in/arvix17" className={styles.iconLink}>
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p>&copy; {currentYear} AuraHP. All rights reserved.</p>
          <div className={styles.linkGroup}>
            <a href="#" className={styles.footerLink}>Privacy Policy</a>
            <a href="#" className={styles.footerLink}>Terms of Service</a>
            <a href="#" className={styles.footerLink}>Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
