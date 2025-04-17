import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '14px 24px',
      background: 'var(--nav-bg)',
      color: 'var(--text)',
      fontFamily: "'Fredoka', sans-serif",
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo / App Name */}
      <Link to="/home" style={{
        fontSize: '1.6rem',
        fontWeight: 'bold',
        color: 'var(--accent)',
        textDecoration: 'none',
        transition: 'transform 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'rotate(-3deg) scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'rotate(0deg) scale(1)'}>
        Friendlix 🍿
      </Link>

      {/* Theme Toggle Button */}
      {/* <button
        onClick={toggleTheme}
        style={{
          background: 'transparent',
          border: '2px solid var(--accent)',
          borderRadius: '20px',
          padding: '6px 12px',
          color: 'var(--text)',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'var(--accent)'}
        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button> */}
    </nav>
  );
};

export default Navbar;
