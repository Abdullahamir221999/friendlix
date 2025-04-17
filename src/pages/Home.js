import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const seasons = { 1: 24 };

const thumbnails = {
  '1-1': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E01.jpg?alt=media&token=e6bb482e-5f06-47e7-9bdd-2db29255d9f0',
  '1-2': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E02.jpg?alt=media&token=3f309c01-cb6f-4055-85bc-c60d48948eaf',
  '1-3': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E03.jpg?alt=media&token=e94f45ca-7a2c-40ee-99a0-ac71b6bfd096',
  '1-4': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E04.jpg?alt=media&token=3de960d4-7737-451d-8b1d-95dfe49ed37d',
  '1-5': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E05.jpg?alt=media&token=9bf0cbaa-5937-4dec-83c8-d46275252685',
  '1-6': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E06.jpg?alt=media&token=547096e5-0263-4ee5-acbe-48d50febe94c',
  '1-7': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E07.jpg?alt=media&token=7b61e85e-af52-45d9-b733-2f2417e73f79',
  '1-8': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E08.jpg?alt=media&token=a28fe0b8-64bf-4cca-bfa2-0138a2cf6e91',
  '1-9': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E09.jpg?alt=media&token=5ef0e722-98f1-4351-bbdf-38a07b880ab9',
  '1-10': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E10.jpg?alt=media&token=2340b774-2c1f-4b25-ad98-46722f9782b1',
  '1-11': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E11.jpg?alt=media&token=8c457ef5-be6b-4221-90fe-3ce1d773c65e',
  '1-12': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E12.jpg?alt=media&token=2cdcc067-42f1-4e95-91cb-2416fd2e913a',
  '1-13': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E13.jpg?alt=media&token=4c1013c5-9cd7-4ba6-b9c2-1c44b3ca9de5',
  '1-14': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E14.jpg?alt=media&token=0b902e8b-6ded-439a-976c-4f6279532797',
  '1-15': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E15.jpg?alt=media&token=54f2f1f8-8f92-49db-b5c3-39c4331de1ec',
  '1-16': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E16.jpg?alt=media&token=6ea4624a-0eea-46aa-9c8c-c307d41a9a32',
  '1-17': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E17.jpg?alt=media&token=cc828dfc-e35a-4e1e-81d9-4db306411c32',
  '1-18': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E18.jpg?alt=media&token=da58fcd2-beb2-468d-a3cd-851212874632',
  '1-19': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E19.jpg?alt=media&token=8955f21f-9542-4448-9102-9fe4b0e336ec',
  '1-20': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E20.jpg?alt=media&token=dad47d6a-a2ac-456f-8df0-d27faefba56e',
  '1-21': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E21.jpg?alt=media&token=2940bbe2-60f9-4452-a20b-39d0c59770df',
  '1-22': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E22.jpg?alt=media&token=b6e04989-1227-4995-b9eb-aaa6ac9a45ff',
  '1-23': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E23.jpg?alt=media&token=d4ef5f7b-bec9-4aff-83b9-518541cb9c34',
  '1-24': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Thumbnails%2FS01%20E24.jpg?alt=media&token=3585fc0c-2031-4af2-b50a-eca5e3c01556',
  // ... all thumbnails you've added
};
const quotes = [
  `"Welcome to the real world. It sucks. You’re gonna love it." – Monica`,
  `"We were on a break!" – Ross`,
  `"How you doin'?" – Joey`,
  `"Oh. My. God!" – Janice`,
  `"I’m not great at the advice. Can I interest you in a sarcastic comment?" – Chandler`,
  `"Smelly cat, smelly cat, what are they feeding you?" – Phoebe`,
  `"It’s like all my life everyone’s always told me, ‘You’re a shoe!’" – Rachel`
];

const Home = () => {
  const [resumeList, setResumeList] = useState([]);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [theme, setTheme] = useState(localStorage.getItem('friends_theme') || 'love');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('friends_theme', theme);
  }, [theme]);

  useEffect(() => {
    const items = Object.keys(localStorage)
      .filter(key => key.startsWith('friends_s'))
      .map(key => {
        const match = key.match(/friends_s(\d+)_e(\d+)_progress/);
        if (!match) return null;
        const [, season, episode] = match;
        const time = parseFloat(localStorage.getItem(key));
        return { season, episode, time };
      })
      .filter(i => i && i.time > 5);

    setResumeList(items);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote(prev => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = secs => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const getWatchedData = (season, episode) => {
    const found = resumeList.find(
      item => item.season === season && item.episode === episode
    );
    return found ? found.time : 0;
  };

  return (
    <div style={{
      padding: '40px 20px',
      maxWidth: '1400px',
      margin: '0 auto',
      backgroundColor: 'var(--bg)',
      color: 'var(--text)',
      minHeight: '100vh',
      fontFamily: "'Fredoka', sans-serif"
    }}>
      
      {/* Theme Selector */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        {['light', 'dark', 'love', 'chill'].map(t => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            style={{
              padding: '8px 14px',
              borderRadius: '20px',
              border: theme === t ? '2px solid var(--accent)' : '1px solid #ccc',
              background: theme === t ? 'var(--accent)' : 'transparent',
              color: theme === t ? '#fff' : 'var(--text)',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <h1 style={{
        fontSize: '2rem',
        marginBottom: '10px',
        textAlign: 'center',
        color: 'var(--accent)',
        transition: 'color 0.3s'
      }}>
        Hey pretty 💕 Ready to laugh with the gang?
      </h1>

      {/* Quotes Carousel */}
      <div style={{
        textAlign: 'center',
        fontSize: '1rem',
        marginBottom: '40px',
        fontStyle: 'italic',
        color: 'var(--accent)',
        minHeight: '40px',
        transition: 'opacity 0.5s ease'
      }}>
        {quotes[currentQuote]}
      </div>

      {/* ... rest of your Resume Watching and All Seasons sections ... */}

      {/* Resume Watching */}
      {resumeList.length > 0 && (
        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ color: 'var(--accent)', marginBottom: '20px' }}>▶ Resume Watching</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '20px'
          }}>
            {resumeList.map(({ season, episode, time }, i) => (
              <Link
                key={i}
                to={`/watch/${season}/${episode}`}
                style={{
                  position: 'relative',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(255,182,193,0.4)',
                  textDecoration: 'none',
                  backgroundColor: 'var(--nav-bg)',
                  color: 'var(--text)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src={thumbnails[`${season}-${episode}`]}
                  alt={`S${season}E${episode}`}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{
                  padding: '10px',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  position: 'relative'
                }}>
                  S{season} · E{episode}
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(255,105,180,0.8)',
                  color: '#fff',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '0.8rem'
                }}>
                  {formatTime(time)}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Seasons */}
      {Object.entries(seasons).map(([season, episodes]) => (
        <div key={season} style={{ marginBottom: '50px' }}>
          <h2 style={{ marginBottom: '20px', color: 'var(--accent)' }}>Season {season}</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '30px'
          }}>
            {[...Array(episodes)].map((_, i) => {
              const ep = i + 1;
              const watchTime = getWatchedData(season, ep);
              const progressPercent = Math.min(100, (watchTime / 1320) * 100);

              return (
                <Link
                  key={ep}
                  to={`/watch/${season}/${ep}`}
                  style={{
                    display: 'block',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(255,182,193,0.4)',
                    textDecoration: 'none',
                    backgroundColor: 'var(--nav-bg)',
                    color: 'var(--text)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div style={{ position: 'relative' }}>
                    <img
                      src={thumbnails[`${season}-${ep}`]}
                      alt={`Season ${season}, Episode ${ep}`}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />
                    {watchTime >= 1200 && (
                      <div style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'rgba(0, 0, 0, 0.75)',
                        color: '#00ff88',
                        padding: '6px 10px',
                        borderRadius: '8px',
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        zIndex: 10
                      }}>
                        ✔ Watched
                      </div>
                    )}
                    {watchTime > 0 && (
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        height: '4px',
                        width: `${progressPercent}%`,
                        background: '#ff69b4',
                        transition: 'width 0.3s ease'
                      }} />
                    )}
                  </div>
                  <div style={{ padding: '10px', fontWeight: 'bold', textAlign: 'center' }}>
                    Episode {ep}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;


