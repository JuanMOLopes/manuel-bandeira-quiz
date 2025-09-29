// ResultScreen.jsx - Tela de resultados
import React from 'react';
import { useQuizContext } from '../../contexts/QuizContext';
import Button from '../UI/Button';
import '../../styles/components/ResultScreen.css';

const ResultScreen = () => {
  const { score, questions, getScorePercentage, getScoreMessage, restartQuiz } = useQuizContext();

  // Verificar se há dados do quiz
  if (!questions || questions.length === 0) {
    return (
      <div className="result-screen">
        <div className="result-container">
          <h1>Erro: Nenhum resultado encontrado</h1>
          <Button onClick={restartQuiz} className="restart-button" size="large">
            Voltar ao Início
          </Button>
        </div>
      </div>
    );
  }

  const handleRestartQuiz = () => {
    restartQuiz();
  };

  const percentage = getScorePercentage();
  const message = getScoreMessage();

  return (
    <div className="result-screen">
      <div className="result-container">
        <header className="result-header">
          <h1 className="result-title">Quiz Concluído!</h1>
          <div className="result-score">
            <div className="score-circle">
              <span className="score-percentage">{percentage}%</span>
              <span className="score-text">de acertos</span>
            </div>
          </div>
        </header>

        <main className="result-content">
          <div className="result-stats">
            <div className="stat-item">
              <span className="stat-number">{score}</span>
              <span className="stat-label">Acertos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{questions.length - score}</span>
              <span className="stat-label">Erros</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{questions.length}</span>
              <span className="stat-label">Total</span>
            </div>
          </div>

          <div className="result-message">
            <h3>{message}</h3>
          </div>

          <div className="result-actions">
            <Button
              onClick={handleRestartQuiz}
              className="restart-button"
              size="large"
            >
              Fazer Novo Quiz
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResultScreen;