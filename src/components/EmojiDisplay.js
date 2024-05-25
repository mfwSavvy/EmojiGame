import React from 'react';

const EmojiDisplay = ({ emoji }) => {
  return (
    <div className="emoji-display">
      {emoji ? <img src={emoji.image} alt={emoji.name} /> : 'Loading...'}
    </div>
  );
};

export default EmojiDisplay;
