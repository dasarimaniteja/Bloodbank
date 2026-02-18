import { createContext, useState, useContext, useEffect } from 'react';
import '../App.css';

const DarkModeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(()=>{
    const stored = localStorage.getItem('darkMode');
    return stored === 'true';
  });
  useEffect(()=>{
    localStorage.setItem('darkMode', isDarkMode);
  },[isDarkMode]);
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? 'dark' : ''}>
        {children}
      </div>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
