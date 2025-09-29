// Alternative.jsx - Componente individual para cada alternativa
import React from 'react';
import '../../styles/components/Alternative.css';

const Alternative = ({
  letter,
  text,
  isSelected,
  isCorrect,
  isAnswered,
  onClick
}) => {
  const getClassName = () => {
    let className = 'alternative';

    if (isAnswered) {
      if (isSelected) {
        className += isCorrect ? ' correct' : ' incorrect';
      } else if (isCorrect) {
        className += ' correct';
      }
    } else {
      className += ' clickable';
    }

    return className;
  };

  return (
    <button
      className={getClassName()}
      onClick={onClick}
      disabled={isAnswered}
    >
      <span className="alternative-letter">{letter})</span>
      <span className="alternative-text">{text}</span>
    </button>
  );
};

export default Alternative;