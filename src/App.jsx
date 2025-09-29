import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useQuiz } from './hooks/useQuiz';
import WelcomeScreen from './components/Screens/WelcomeScreen';
import './styles/global.css';

function App() {
  const quiz = useQuiz();

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<WelcomeScreen onStartQuiz={quiz.initializeQuiz} />}
          />
          <Route
            path="/quiz"
            element={<div>Quiz Screen - Em desenvolvimento</div>}
          />
          <Route
            path="/result"
            element={<div>Result Screen - Em desenvolvimento</div>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
