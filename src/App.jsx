import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './contexts/QuizContext';
import QuizApp from './components/QuizApp';
import './styles/global.css';

function App() {
  return (
    <QuizProvider>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/" element={<QuizApp />} />
          </Routes>
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;
