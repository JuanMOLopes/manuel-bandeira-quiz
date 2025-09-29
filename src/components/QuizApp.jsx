import React from 'react';
import { useQuizContext } from '../contexts/QuizContext';
import WelcomeScreen from './Screens/WelcomeScreen';
import QuizContainer from './Quiz/QuizContainer';
import ResultScreen from './Screens/ResultScreen';

const QuizApp = () => {
  const { currentScreen } = useQuizContext();

  switch (currentScreen) {
    case 'quiz':
      return <QuizContainer />;
    case 'result':
      return <ResultScreen />;
    case 'welcome':
    default:
      return <WelcomeScreen />;
  }
};

export default QuizApp;