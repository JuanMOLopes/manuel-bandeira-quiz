// FeedbackModal.jsx - Modal de feedback
import React from 'react';
import Button from '../UI/Button';
import '../../styles/components/FeedbackModal.css';

const FeedbackModal = ({ isCorrect, correctAnswer, explanation, onClose, isLastQuestion }) => {
  return (
    <div className="feedback-modal-overlay">
      <div className="feedback-modal">
        <div className="feedback-header">
          <div className={`feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '✓' : '✗'}
          </div>
          <h3 className="feedback-title">
            {isCorrect ? 'Resposta Correta!' : 'Resposta Incorreta'}
          </h3>
        </div>

        <div className="feedback-content">
          {!isCorrect && (
            <p className="correct-answer">
              A resposta correta é: <strong>{correctAnswer.toUpperCase()}</strong>
            </p>
          )}

          <div className="explanation">
            <h4>Explicação:</h4>
            <p>{explanation}</p>
          </div>
        </div>

        <div className="feedback-actions">
          <Button onClick={onClose} className="continue-button" size="medium">
            {isLastQuestion ? 'Ver Resultado' : 'Continuar'}
          </Button>
        </div>
      </div>
    </div>
  );
};

FeedbackModal.defaultProps = {
  isLastQuestion: false
};

export default FeedbackModal;