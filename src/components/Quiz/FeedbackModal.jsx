// FeedbackModal.jsx - Modal de feedback
import React from 'react';
import Button from '../UI/Button';
import '../../styles/components/FeedbackModal.css';

const FeedbackModal = ({ isCorrect, correctAnswer, correctAnswerText, selectedAnswer, selectedAnswerText, explanation, onClose }) => {
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
          <div className="answer-summary">
            {!isCorrect && (
              <div className="selected-answer">
                <h4>Sua resposta:</h4>
                <div className="answer-item incorrect">
                  <span className="answer-letter">{selectedAnswer.toUpperCase()})</span>
                  <span className="answer-text">{selectedAnswerText}</span>
                </div>
              </div>
            )}

            <div className="correct-answer">
              <h4>Resposta correta:</h4>
              <div className="answer-item correct">
                <span className="answer-letter">{correctAnswer.toUpperCase()})</span>
                <span className="answer-text">{correctAnswerText}</span>
              </div>
            </div>
          </div>

          <div className="explanation">
            <h4>Explicação:</h4>
            <p>{explanation}</p>
          </div>
        </div>

        <div className="feedback-actions">
          <Button onClick={onClose} className="continue-button" size="medium">
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;