import React from 'react';

const Options = ({ options, handleGuess }) => {
  return (
    <div className="options">
      {options.map((option) => (
        <button key={option.name} onClick={() => handleGuess(option.name)}>
          {option.name}
        </button>
      ))}
    </div>
  );
};

export default Options;
