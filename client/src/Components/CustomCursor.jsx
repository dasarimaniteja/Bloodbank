import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../index.css'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      document.body.style.cursor = 'auto';
      return;
    }

    document.body.style.cursor = 'none';

    const mMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const mLeave = () => {
      setVisible(false);
    };

    const mDown = () => {
      setClicked(true);
    };

    const mUp = () => {
      setClicked(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('[data-cursor="pointer"]').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    handleLinkHoverEvents();
    window.addEventListener('mousemove', mMove);
    window.addEventListener('mouseenter', () => setVisible(true));
    window.addEventListener('mouseleave', mLeave);
    window.addEventListener('mousedown', mDown);
    window.addEventListener('mouseup', mUp);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', mMove);
      window.removeEventListener('mouseenter', () => setVisible(true));
      window.removeEventListener('mouseleave', mLeave);
      window.removeEventListener('mousedown', mDown);
      window.removeEventListener('mouseup', mUp);
    };
  }, [location.pathname]);

  if (location.pathname !== '/') {
    return null;
  }

  const cursorClasses = `cursor 
    ${visible ? 'visible' : 'invisible'} 
    ${clicked ? 'clicked' : ''} 
    ${linkHovered ? 'hover' : ''}`;

  const cursorDotClasses = `cursor-dot
    ${visible ? 'visible' : 'invisible'} 
    ${clicked ? 'clicked' : ''}`;

  return (
    <>
      <div 
        className={cursorClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1
        }}
      ></div>
      <div 
        className={cursorDotClasses}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0
        }}
      ></div>
    </>
  );
};

export default CustomCursor;
