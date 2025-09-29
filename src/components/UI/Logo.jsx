import React from 'react';
import { useQuizContext } from '../../contexts/QuizContext';
import '../../styles/components/Logo.css';

const Logo = ({ className = '' }) => {
  const { restartQuiz } = useQuizContext();

  const handleLogoClick = () => {
    restartQuiz();
  };

  return (
    <div className={`logo-section ${className}`} onClick={handleLogoClick}>
      <img src="/icon.png" alt="BrainQuiz Logo" className="logo-icon" />
      <div className="logo-text">
        <h1 className="main-title">BrainQuiz</h1>
        <span className="subtitle">Literatura</span>
      </div>
    </div>
  );
};

export default Logo;