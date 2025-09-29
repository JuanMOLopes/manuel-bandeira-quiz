// QuizContainer.jsx - Container principal do quiz
import React from 'react';
import { useQuizContext } from '../../contexts/QuizContext';
import Question from './Question';
import Alternative from './Alternative';
import FeedbackModal from './FeedbackModal';
import ProgressBar from '../UI/ProgressBar';
import Button from '../UI/Button';
import '../../styles/components/QuizContainer.css';

const QuizContainer = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    questions,
    selectedAnswer,
    showFeedback,
    isAnswered,
    progress,
    isLastQuestion,
    selectAnswer,
    nextQuestion
  } = useQuizContext();

  if (!currentQuestion) {
    return <div className="quiz-loading">Carregando quiz...</div>;
  }

  const handleAlternativeClick = (alternativeKey) => {
    if (!isAnswered) {
      selectAnswer(alternativeKey);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Para a última questão, vamos diretamente para o resultado
      nextQuestion();
    } else {
      nextQuestion();
    }
  };

  const handleModalClose = () => {
    // Fechar o modal e ir para a próxima questão ou resultado
    handleNextQuestion();
  };

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <div className="quiz-progress">
          <span className="question-counter">
            Questão {currentQuestionIndex + 1} de {questions.length}
          </span>
          <ProgressBar progress={progress} />
        </div>
      </header>

      <main className="quiz-main">
        <Question question={currentQuestion} />

        <div className="alternatives-container">
          {Object.entries(currentQuestion.alternativas).map(([key, text]) => (
            <Alternative
              key={key}
              letter={key.toUpperCase()}
              text={text}
              isSelected={selectedAnswer === key}
              isCorrect={key === currentQuestion.resposta_correta}
              isAnswered={isAnswered}
              onClick={() => handleAlternativeClick(key)}
            />
          ))}
        </div>

        {isAnswered && (
          <div className="next-button-container">
            <Button
              onClick={handleNextQuestion}
              className="next-button"
              size="medium"
            >
              {isLastQuestion ? 'Ver Resultado' : 'Próxima Questão'}
            </Button>
          </div>
        )}
      </main>

      {showFeedback && (
        <FeedbackModal
          isCorrect={selectedAnswer === currentQuestion.resposta_correta}
          correctAnswer={currentQuestion.resposta_correta}
          explanation={currentQuestion.explicacao}
          onClose={handleModalClose}
          isLastQuestion={isLastQuestion}
        />
      )}
    </div>
  );
};

export default QuizContainer;