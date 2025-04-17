import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';

const episodeVideos = {
  '1-1': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Friends%20S01E01%20The%20One%20Where%20It%20All%20Began%20(1080p%20x265%2010bit%20Joy)%20(C).mp4?alt=media&token=613a17ee-4603-4432-9f50-a89fbbf18d02',
  '1-2': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Friends%20S01E02%20The%20One%20With%20the%20Sonogram%20at%20the%20End%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=8cffbe46-9343-40c9-817a-a168e5aab8ee',
  '1-3': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E03%20The%20One%20With%20the%20Thumb%20%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=62bd519f-7a2b-4db4-b3b7-092d6057b7a4',
  '1-4': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E04%20The%20One%20With%20George%20Stephanopoulos%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=136d8484-1609-414b-8a68-7416ff19ec3a',
  '1-5': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E05%20The%20One%20With%20the%20East%20German%20Laundry%20Detergent%20%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=b09fdf33-8881-4b4d-b8d7-4adfdec86fbe',
  '1-6': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E06%20The%20One%20With%20the%20Butt%20%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=51cf7299-d9f9-47b8-bf7a-01dc65ef6a06',
  '1-7': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E07%20The%20One%20With%20the%20Blackout%20%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=ed792e7a-c7fc-434f-ba73-f017006830a1',
  '1-8': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E08%20The%20One%20Where%20Nana%20Dies%20Twice%20%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=c228aa40-7ef5-4cb9-846d-8de3affffaef',
  '1-9': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E09%20The%20One%20Where%20Underdog%20Gets%20Away%20%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=f453b851-4e73-422d-9c29-3d054161d3c5',
  '1-10': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E10%20The%20One%20With%20the%20Monkey%20%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=87ab7789-a64a-48b2-bf8b-475f06bf2dd8',
  '1-11': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E04%20The%20One%20With%20George%20Stephanopoulos%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=136d8484-1609-414b-8a68-7416ff19ec3a',
  '1-12': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E04%20The%20One%20With%20George%20Stephanopoulos%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=136d8484-1609-414b-8a68-7416ff19ec3a',
  '1-13': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E04%20The%20One%20With%20George%20Stephanopoulos%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=136d8484-1609-414b-8a68-7416ff19ec3a',
  '1-14': 'https://firebasestorage.googleapis.com/v0/b/friendlix-b44d9.firebasestorage.app/o/Season%201%20Episodes%2FFriends%20S01E04%20The%20One%20With%20George%20Stephanopoulos%20(1080p%20x265%2010bit%20Joy).mp4?alt=media&token=136d8484-1609-414b-8a68-7416ff19ec3a',
  // add more...
};

const episodeMeta = {
  '1-1': {
    title: "The One Where Monica Gets a Roommate",
    description: "Rachel leaves her fiancé at the altar and moves in with Monica. Ross is devastated after his divorce.",
    quote: "Welcome to the real world. It sucks. You’re gonna love it. – Monica",
    funFact: "The pilot episode originally aired on September 22, 1994.",
  },
  '1-2': {
    title: "The One with the Sonogram at the End",
    description: "Ross finds out his ex-wife is pregnant. Rachel returns her engagement ring.",
    quote: "I don't want her to marry me because she loves me. – Barry",
    funFact: "This episode is the first time Ross hears his baby's heartbeat.",
  },
  '1-3': {
    title: "The One with the Thumb",
    description: "Phoebe gets money after finding a thumb in a soda can. Chandler starts smoking again.",
    quote: "I gave up smoking. Isn’t that worth $7,000? – Phoebe",
    funFact: "Phoebe gets $7,000 for returning the can with the thumb.",
  },
  '1-4': {
    title: "The One with George Stephanopoulos",
    description: "The girls spy on George Stephanopoulos. The guys attend a Rangers game.",
    quote: "Could I BE wearing any more clothes? – Joey (technically later, but iconic!)",
    funFact: "The gang mentions George Stephanopoulos, a real political figure.",
  },
  '1-5': {
    title: "The One with the East German Laundry Detergent",
    description: "Ross and Rachel do laundry together. Chandler breaks up with Janice.",
    quote: "The fabric softener is the key to everything! – Ross",
    funFact: "Ross and Rachel do laundry together for the first time.",
  },
  '1-6': {
    title: "The One with the Butt",
    description: "Joey gets a film role as Al Pacino’s body double. Chandler dates a woman with multiple personalities.",
    quote: "I’m the butt double! – Joey",
    funFact: "This is the first episode where Joey lands an acting gig.",
  },
  '1-7': {
    title: "The One with the Blackout",
    description: "A city-wide blackout leads to Ross trying to tell Rachel how he feels. Chandler gets stuck in an ATM vestibule.",
    quote: "It’s an ATM vestibule with Jill Goodacre! – Chandler",
    funFact: "The blackout affects all NBC sitcoms set in New York that night.",
  },
  '1-8': {
    title: "The One Where Nana Dies Twice",
    description: "Ross and Monica's grandmother passes away. Chandler is mistaken as gay by a coworker.",
    quote: "I'm not gay, but nobody believes me! – Chandler",
    funFact: "This is the first time Chandler's sexuality becomes a running joke.",
  },
  '1-9': {
    title: "The One Where Underdog Gets Away",
    description: "The gang gets locked out of Monica’s apartment on Thanksgiving.",
    quote: "Underdog has gotten away! – TV news anchor",
    funFact: "This is the first Friends Thanksgiving episode!",
  },
  '1-10': {
    title: "The One with the Monkey",
    description: "Ross adopts a monkey named Marcel. The group makes a New Year’s pact.",
    quote: "This is my monkey. Deal with it. – Ross",
    funFact: "Marcel was played by a female monkey named Katie.",
  },
  '1-11': {
    title: "The One with Mrs. Bing",
    description: "Chandler’s mom visits and kisses Ross. Joey learns Chandler writes romance novels.",
    quote: "You kissed my mom?! – Chandler",
    funFact: "Mrs. Bing is played by Morgan Fairchild.",
  },
  '1-12': {
    title: "The One with the Dozen Lasagnas",
    description: "Monica makes a dozen lasagnas. Rachel finds out that Paolo hit on Phoebe.",
    quote: "All the lasagnas are meat! – Monica",
    funFact: "Monica’s lasagnas were meant to be vegetarian.",
  },
  '1-13': {
    title: "The One with the Boobies",
    description: "Chandler accidentally sees Rachel naked. Joey learns his dad has a mistress.",
    quote: "You saw my boobies! – Rachel",
    funFact: "This is the first appearance of Joey’s dad.",
  },
  '1-14': {
    title: "The One with the Candy Hearts",
    description: "Ross goes on a date on Valentine’s Day. Chandler runs into Janice.",
    quote: "I broke up with Janice on Valentine’s Day. – Chandler",
    funFact: "Ross burns a memento from Carol.",
  },
  '1-15': {
    title: "The One with the Stoned Guy",
    description: "Monica interviews for a new job with a stoned restaurant owner. Ross makes margaritas.",
    quote: "Tartlets... tartlets... the word has lost all meaning. – Monica",
    funFact: "Guest star Jon Lovitz plays the stoned restaurant owner.",
  },
  '1-16': {
    title: "The One with Two Parts: Part 1",
    description: "Joey dates Phoebe’s twin sister. Ross struggles with fatherhood classes.",
    quote: "You don’t have a twin! – Joey",
    funFact: "First time Ursula appears in Friends.",
  },
  '1-17': {
    title: "The One with Two Parts: Part 2",
    description: "Rachel sprains her ankle. Monica and Phoebe switch places during a hospital visit.",
    quote: "I'm sorry, I don't have any sisters. – Phoebe",
    funFact: "George Clooney guest stars as a doctor.",
  },
  '1-18': {
    title: "The One with All the Poker",
    description: "The girls take on the guys in poker. Rachel interviews for a new job.",
    quote: "I’m not great at the advice... Can I interest you in a sarcastic comment? – Chandler",
    funFact: "The episode was inspired by the cast playing poker in real life.",
  },
  '1-19': {
    title: "The One Where the Monkey Gets Away",
    description: "Rachel loses Marcel. The gang searches the city to find him.",
    quote: "It’s just a monkey! – Rachel",
    funFact: "The episode title is a nod to the show’s original concept: Joey & the Monkey.",
  },
  '1-20': {
    title: "The One with the Evil Orthodontist",
    description: "Rachel gets back together with her ex-fiancé. Chandler tries to quit the gym.",
    quote: "I wanna quit the gym! – Chandler",
    funFact: "First episode with Ross and Carol in a major argument.",
  },
  '1-21': {
    title: "The One with the Fake Monica",
    description: "Monica befriends the woman who stole her credit card. Ross gives up Marcel.",
    quote: "You were fake Monica all along! – Monica",
    funFact: "This is the last episode with Marcel until later seasons.",
  },
  '1-22': {
    title: "The One with the Ick Factor",
    description: "Monica finds out her boyfriend is a high school senior. Ross finds out his baby is a boy.",
    quote: "You're how old?! – Monica",
    funFact: "Monica finds out Ethan is 17 after sleeping with him.",
  },
  '1-23': {
    title: "The One with the Birth",
    description: "Carol goes into labor. Ross, Susan, and Phoebe get stuck in a closet.",
    quote: "My son is having a baby! – Ross",
    funFact: "This is the birth of Ben, Ross's son.",
  },
  '1-24': {
    title: "The One Where Rachel Finds Out",
    description: "Rachel finds out Ross loves her just as he leaves for China. Chandler accidentally spills the beans.",
    quote: "You're going to China?! – Rachel",
    funFact: "This is the Season 1 cliffhanger and sets up the Ross-Rachel arc.",
  },
};


const Player = () => {
  const { season, episode } = useParams();
  const key = `${season}-${episode}`;
  const videoUrl = episodeVideos[key];
  const { title, description, quote, funFact } = episodeMeta[key] || {};

  const progressKey = `friends_s${season}_e${episode}_progress`;
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const saved = parseFloat(localStorage.getItem(progressKey) || '0');
    setCurrentTime(saved);
  }, [progressKey]);

  useEffect(() => {
    const interval = setInterval(() => {
      const player = document.querySelector('.video-js')?.player;
      if (player && !isNaN(player.currentTime())) {
        //const time = player.currentTime();
        //localStorage.setItem(progressKey, time);
        //setCurrentTime(time);
        localStorage.setItem(progressKey, player.currentTime());
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [progressKey]);

  if (!videoUrl) {
    return (
      <div style={{ padding: '60px', textAlign: 'center', color: 'crimson', fontSize: '1.5rem' }}>
        Episode not uploaded yet 💔
      </div>
    );
  }

  return (
  <div style={{
    padding: '40px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#fff',
    minHeight: '100vh',
    color: '#ff69b4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <h1 style={{ fontSize: '2rem', marginBottom: '8px' }}>
      {title || `Season ${season}, Episode ${episode}`}
    </h1>

    {description && (
      <p style={{
        marginBottom: '12px',
        fontSize: '1rem',
        color: '#d63384',
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        {description}
      </p>
    )}

    {quote && (
      <blockquote style={{
        fontStyle: 'italic',
        color: '#ff69b4',
        marginBottom: '12px',
        borderLeft: '4px solid #ffb6c1',
        paddingLeft: '12px',
        maxWidth: '600px',
        textAlign: 'center'
      }}>
        “{quote}”
      </blockquote>
    )}

    {funFact && (
      <div style={{
        backgroundColor: '#ffe6ef',
        color: '#d63384',
        padding: '10px 15px',
        borderRadius: '10px',
        marginBottom: '20px',
        fontSize: '0.95rem',
        maxWidth: '600px',
        textAlign: 'center',
        boxShadow: '0 2px 6px rgba(255,182,193,0.3)'
      }}>
        💡 <strong>Fun Fact:</strong> {funFact}
      </div>
    )}

    <div style={{
      width: '100%',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(255, 182, 193, 0.4)',
      backgroundColor: '#ffe6ef',
      padding: '10px'
    }}>
      <VideoPlayer src={videoUrl} startTime={currentTime} />
    </div>

    {currentTime > 5 && (
      <div style={{
        marginTop: '10px',
        textAlign: 'center',
        fontSize: '0.9rem',
      }}>
        You’re at {Math.floor(currentTime / 60)}:
        {String(Math.floor(currentTime % 60)).padStart(2, '0')} — resume next time!
      </div>
    )}
  </div>
  );
};

export default Player;  




