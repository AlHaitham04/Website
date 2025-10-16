import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { SideBar } from './Components/sbf/sideBar';
import Home from './Pages/Home';
import About from './Pages/About';
import CV from './Pages/CV';

function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/Website/#/" element={<Home />} />
          <Route path="/#/about" element={<About />} />
          <Route path="/#/cv" element={<CV />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
