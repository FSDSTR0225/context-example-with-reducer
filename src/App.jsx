import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import { Home } from './pages/Home';
import { Stats } from './pages/Stats';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/stats">Stats</Link>
          <Link to="/home2">Home2</Link>
          <Link to="/stats2">Stats2</Link>
        </nav>
        <TodoProvider>
          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stats" element={<Stats />} />
            </Routes>
          </main>
        </TodoProvider>
        <TodoProvider>
          <main className="main">
            <Routes>
              <Route path="/home2" element={<Home />} />
              <Route path="/stats2" element={<Stats />} />
            </Routes>
          </main>
        </TodoProvider>
      </div>

    </Router>
  );
}

export default App;
