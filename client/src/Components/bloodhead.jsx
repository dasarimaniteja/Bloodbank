import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import './bloodhead.css';

function Bloodhead() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  // Optional: auto-close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="mobile-header">
        <h1 className="header-title">AuraHP</h1>
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle Menu">
          <FaBars size={24} />
        </button>
      </header>

      <aside className={`mobile-dropdown ${menuOpen ? 'open' : ''}`}>
        <ul className="navItems">
          <li className="navItem">Home</li>
          <li className="navItem">About</li>
          <li className="navItem">Settings</li>
        </ul>
      </aside>
    </>
  );
}

export default Bloodhead;
