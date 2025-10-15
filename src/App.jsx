import './App.css';
import { SideBar } from './Components/sbf/sideBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import CV from './Pages/CV';


function App() {
  return (
    <Router>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
