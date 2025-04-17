/*import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';

const VideoPlayer = ({ src, subtitles }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const initPlayer = () => {
      if (!playerRef.current && videoRef.current) {
        const player = videojs(videoRef.current, {
          controls: true,
          responsive: true,
          fluid: true,
          sources: [{
            src: src,
            type: 'video/mp4'
          }]
        });

        playerRef.current = player;

        // ✅ Subtitles
        subtitles?.forEach(sub => {
          player.addRemoteTextTrack({
            kind: 'subtitles',
            src: sub.src,
            srclang: sub.lang,
            label: sub.label,
            default: sub.default || false
          }, false);
        });

        // ✅ "Next episode in..." overlay
        player.ready(() => {
          player.on('ended', () => {
            const overlay = document.createElement('div');
            overlay.innerText = `Next episode starting in 5...`;
            Object.assign(overlay.style, {
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              background: '#ff69b4',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: '14px',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              zIndex: 10000
            });
            document.body.appendChild(overlay);

            let countdown = 4;
            const timer = setInterval(() => {
              if (countdown === 0) {
                clearInterval(timer);
                document.body.removeChild(overlay);

                // Get current route path (e.g. /watch/1/1)
                const currentPath = window.location.pathname;
                const pathParts = currentPath.split('/');
                const currentEpisode = parseInt(pathParts[pathParts.length - 1]);
                const currentSeason = parseInt(pathParts[pathParts.length - 2]);
                const nextEpisode = currentEpisode + 1;

                // Redirect to next episode
                window.location.href = `/watch/${currentSeason}/${nextEpisode}`;
              } else {
                overlay.innerText = `Next episode starting in ${countdown}...`;
                countdown--;
              }
            }, 1000);
          });

          player.on('error', () => {
            console.error('🔥 Player error:', player.error());
          });
        });
      }
    };

    const timer = setTimeout(initPlayer, 100);

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
      clearTimeout(timer);
    };
  }, [src, subtitles]);

  return (
    <div data-vjs-player style={{ width: '100%', minHeight: '500px' }}>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
        controls
        playsInline
      />
    </div>
  );
};

export default VideoPlayer; */

import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';

const VideoPlayer = ({ src, subtitles, startTime = 0 }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    const initPlayer = () => {
      if (!playerRef.current && videoRef.current) {
        const player = videojs(videoRef.current, {
          controls: true,
          responsive: true,
          fluid: true,
          sources: [{
            src: src,
            type: 'video/mp4'
          }]
        });

        playerRef.current = player;

        // ✅ Seek to resume time when ready
        player.ready(() => {
          if (startTime > 0) {
            player.currentTime(startTime);
          }

          // ✅ "Next episode in..." overlay
          player.on('ended', () => {
            const overlay = document.createElement('div');
            overlay.innerText = `Next episode starting in 5...`;
            Object.assign(overlay.style, {
              position: 'fixed',
              bottom: '30px',
              right: '30px',
              background: '#ff69b4',
              color: '#fff',
              padding: '10px 18px',
              borderRadius: '14px',
              fontWeight: 'bold',
              fontSize: '1rem',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
              zIndex: 10000
            });
            document.body.appendChild(overlay);

            let countdown = 4;
            const timer = setInterval(() => {
              if (countdown === 0) {
                clearInterval(timer);
                document.body.removeChild(overlay);

                // Get current route path (e.g. /watch/1/1)
                const currentPath = window.location.pathname;
                const pathParts = currentPath.split('/');
                const currentEpisode = parseInt(pathParts[pathParts.length - 1]);
                const currentSeason = parseInt(pathParts[pathParts.length - 2]);
                const nextEpisode = currentEpisode + 1;

                // Redirect to next episode
                window.location.href = `/watch/${currentSeason}/${nextEpisode}`;
              } else {
                overlay.innerText = `Next episode starting in ${countdown}...`;
                countdown--;
              }
            }, 1000);
          });

          // 🔥 Error logger
          player.on('error', () => {
            console.error('🔥 Player error:', player.error());
          });
        });

        // ✅ Add subtitles
        subtitles?.forEach(sub => {
          player.addRemoteTextTrack({
            kind: 'subtitles',
            src: sub.src,
            srclang: sub.lang,
            label: sub.label,
            default: sub.default || false
          }, false);
        });
      }
    };

    const timer = setTimeout(initPlayer, 100);

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
      clearTimeout(timer);
    };
  }, [src, subtitles, startTime]);

  return (
    <div data-vjs-player style={{ width: '100%', minHeight: '500px' }}>
      <video
        ref={videoRef}
        className="video-js vjs-big-play-centered"
        controls
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;










