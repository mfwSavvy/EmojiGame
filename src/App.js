import React, { useState, useEffect } from 'react';
import EmojiDisplay from './components/EmojiDisplay';
import Options from './components/Options';
import Scoreboard from './components/Scoreboard';
import emojis from './assets/emojis.json';  // Asegúrate de que la ruta sea correcta

const App = () => {
  const [currentEmoji, setCurrentEmoji] = useState({});
  const [score, setScore] = useState(0);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    loadNewEmoji();
  }, []);

  const loadNewEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const emoji = emojis[randomIndex];
    setCurrentEmoji(emoji);
    setOptions(generateOptions(emoji));
  };

  const generateOptions = (correctEmoji) => {
    const options = [correctEmoji];
    while (options.length < 4) {
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      if (!options.includes(randomEmoji)) {
        options.push(randomEmoji);
      }
    }
    return options.sort(() => Math.random() - 0.5);
  };

  const handleGuess = (guess) => {
    if (guess === currentEmoji.name) {
      setScore(score + 1);
      loadNewEmoji();
    } else {
      alert('Incorrect! Game over.');
      setScore(0);
      loadNewEmoji();
    }
  };

  return (
    <div className="app">
      <h1>Emoji Guessing Game</h1>
      <EmojiDisplay emoji={currentEmoji} />
      <Options options={options} handleGuess={handleGuess} />
      <Scoreboard score={score} />
    </div>
  );
};

export default App;
