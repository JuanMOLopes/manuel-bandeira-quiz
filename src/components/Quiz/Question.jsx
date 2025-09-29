// Question.jsx - Componente para exibir questões
import React from 'react';
import '../../styles/components/Question.css';

const Question = ({ question }) => {
  return (
    <div className="question">
      <div className="question-header">
        <span className="question-source">{question.fonte}</span>
      </div>

      <div className="question-content">
        <h3 className="question-statement">{question.enunciado}</h3>

        {question.texto && (
          <div className="question-text">
            <pre className="poem-text">{question.texto}</pre>
          </div>
        )}

        {question.imagem && (
          <div className="question-image">
            <img src={question.imagem} alt="Ilustração da questão" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;