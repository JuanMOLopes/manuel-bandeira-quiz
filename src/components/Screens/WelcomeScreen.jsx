import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import InstructionsModal from './InstructionsModal';
import '../../styles/components/WelcomeScreen.css';

const WelcomeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleStartQuiz = () => {
    setIsModalOpen(true);
  };

  const handleBeginQuiz = () => {
    setIsModalOpen(false);
    navigate('/quiz');
  };

  return (
    <div className="welcome-screen">
      <header className="welcome-header">
        <div className="logo-section">
          <img src="/icon.png" alt="BrainQuiz Logo" className="logo-icon" />
          <div className="logo-text">
            <h1 className="main-title">BrainQuiz</h1>
            <span className="subtitle">Literatura</span>
          </div>
        </div>
      </header>

      <main className="welcome-content">
        <div className="hero-section">
          <h2 className="hero-title">
            Quiz sobre<br />
            <span className="poet-name">Manuel Bandeira</span>
          </h2>
          <p className="hero-description">
            Teste seus conhecimentos sobre um dos maiores poetas da literatura brasileira.
            Questões de vestibulares sobre poesia modernista, biografia e obras do autor.
          </p>
        </div>

        <div className="action-section">
          <Button onClick={handleStartQuiz} className="start-button" size="large">
            Iniciar Quiz
          </Button>
          <p className="quiz-info">
            10 questões • Questões aleatórias • Feedback imediato
          </p>
        </div>
      </main>

      {isModalOpen && <InstructionsModal onClose={handleBeginQuiz} />}
    </div>
  );
};

export default WelcomeScreen;