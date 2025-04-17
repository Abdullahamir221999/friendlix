import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #fff, #ffe6f0)',
      color: '#ff69b4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        color: '#ff69b4'
      }}>
        Welcome to <span style={{ color: '#ffb6c1' }}>Friendslix</span>
      </h1>

      <p style={{
        fontSize: '1.25rem',
        marginBottom: '2rem',
        maxWidth: '500px',
        color: '#d63384'
      }}>
        Your very own Friends Player.
      </p>

      <Link to="/home" style={{
        backgroundColor: '#ffb6c1',
        color: '#fff',
        padding: '1rem 2rem',
        borderRadius: '30px',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        textDecoration: 'none',
        boxShadow: '0 4px 10px rgba(255, 182, 193, 0.3)',
        transition: 'transform 0.2s ease-in-out'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        Start Watching
      </Link>
    </div>
  );
};

export default Landing;


