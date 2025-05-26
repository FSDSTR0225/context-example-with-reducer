import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import { Home } from './pages/Home';
import { Stats as Statistics } from './pages/Stats';
import HooksPage from './pages/HooksPage';
import UploadFilePage from './pages/UploadFile';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/stats">Stats</Link>
          <Link to="/hooks">Hooks Demo</Link>
          <Link to="/upload">Upload File</Link>
        </nav>
        <TodoProvider>
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Statistics />} />
              <Route path="/hooks" element={<HooksPage />} />
              <Route path="/upload" element={<UploadFilePage />} />
            </Routes>
          </main>
        </TodoProvider>
      </div>
    </Router>
  );
}

export default App;
