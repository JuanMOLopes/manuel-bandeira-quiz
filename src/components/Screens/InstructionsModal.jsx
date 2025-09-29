import React from 'react';
import '../../styles/components/InstructionsModal.css';

const InstructionsModal = ({ onClose }) => {
  return (
    <div className="instructions-modal-overlay">
      <div className="instructions-modal">
        <h2 className="instructions-title">Instruções</h2>
        <p className="instructions-text">
          Bem-vindo ao Quiz sobre Manuel Bandeira! Aqui estão algumas dicas para começar:
        </p>
        <ul className="instructions-list">
          <li>Você terá 10 questões aleatórias sobre a vida e obra de Manuel Bandeira.</li>
          <li>Escolha a alternativa correta entre as opções (A, B, C, D, E).</li>
          <li>Receba feedback imediato após cada resposta.</li>
          <li>Divirta-se e teste seus conhecimentos!</li>
        </ul>
        <button className="instructions-button" onClick={onClose}>
          Começar Agora
        </button>
        <div className="ai-attribution">
          <p>Questões adaptadas pela IA Claude Sonnet 4</p>
        </div>
      </div>
    </div>
  );
};

export default InstructionsModal;