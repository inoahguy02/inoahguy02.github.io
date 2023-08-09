import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Projects from './Projects';
import Resume from './Resume';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/" className='Name'><h1 className="Name">Noah Garland</h1></Link>
          <div className='Nav-Links'>
            <Link to="/projects" className='Link'>Projects</Link>
            <Link to="/resume" className='Link'>Resume</Link>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
