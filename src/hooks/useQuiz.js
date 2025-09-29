import { useState, useCallback } from 'react';
import questionsData from '../data/questions.json';

export const useQuiz = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome'); // welcome, quiz, result
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Embaralhar array usando algoritmo Fisher-Yates
  const shuffleArray = useCallback((array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  // Embaralhar alternativas de uma questão
  const shuffleAlternatives = useCallback((question) => {
    const alternatives = { ...question.alternativas };
    const keys = Object.keys(alternatives);
    const shuffledKeys = shuffleArray(keys);

    const shuffledAlternatives = {};
    shuffledKeys.forEach((key, index) => {
      const newKey = String.fromCharCode(97 + index); // a, b, c, d, e
      shuffledAlternatives[newKey] = alternatives[key];
    });

    // Encontrar a nova resposta correta
    const originalCorrectKey = question.resposta_correta;
    const originalCorrectIndex = keys.indexOf(originalCorrectKey);
    const newCorrectKey = String.fromCharCode(97 + shuffledKeys.indexOf(keys[originalCorrectIndex]));

    return {
      ...question,
      alternativas: shuffledAlternatives,
      resposta_correta: newCorrectKey
    };
  }, [shuffleArray]);

  // Inicializar quiz
  const initializeQuiz = useCallback(() => {
    const shuffledQuestions = shuffleArray(questionsData.questions).slice(0, 10);
    const questionsWithShuffledAlternatives = shuffledQuestions.map(shuffleAlternatives);
    setQuestions(questionsWithShuffledAlternatives);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsAnswered(false);
    setQuizCompleted(false);
    setCurrentScreen('quiz');
  }, [shuffleArray, shuffleAlternatives]);

  // Selecionar resposta
  const selectAnswer = useCallback((answer) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);
    setShowFeedback(true);

    // Verificar se resposta está correta
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.resposta_correta) {
      setScore(prev => prev + 1);
    }
  }, [isAnswered, questions, currentQuestionIndex]);

  // Próxima questão
  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
      setCurrentScreen('result');
    }
  }, [currentQuestionIndex, questions.length]);

  // Reiniciar quiz
  const restartQuiz = useCallback(() => {
    setCurrentScreen('welcome');
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowFeedback(false);
    setIsAnswered(false);
    setQuizCompleted(false);
  }, []);

  // Calcular porcentagem de acertos
  const getScorePercentage = useCallback(() => {
    return questions.length > 0 ? Math.round((score / questions.length) * 100) : 0;
  }, [score, questions.length]);

  // Obter mensagem baseada na pontuação
  const getScoreMessage = useCallback(() => {
    const percentage = getScorePercentage();
    if (percentage >= 90) return 'Excelente! Você é um expert em Manuel Bandeira!';
    if (percentage >= 70) return 'Muito bom! Você conhece bem a obra do poeta!';
    if (percentage >= 50) return 'Bom trabalho! Continue estudando literatura!';
    return 'Que tal revisar alguns conceitos? Literatura é fascinante!';
  }, [getScorePercentage]);

  // Estado atual da questão
  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return {
    // Estado
    currentScreen,
    questions,
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    score,
    showFeedback,
    isAnswered,
    quizCompleted,
    progress,
    isLastQuestion,

    // Ações
    initializeQuiz,
    selectAnswer,
    nextQuestion,
    restartQuiz,

    // Utilitários
    getScorePercentage,
    getScoreMessage,

    // Navegação
    goToWelcome: () => setCurrentScreen('welcome'),
    goToQuiz: () => setCurrentScreen('quiz'),
    goToResult: () => setCurrentScreen('result')
  };
};