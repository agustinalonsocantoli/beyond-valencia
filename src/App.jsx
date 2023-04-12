// React
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import { Navbar } from '@/components/Navbar';
import { Home } from '@/pages/Home';

function App() {
  const [ navbarVisible, setNavbarVisible ] = useState(true);

  return (
    <div className="app">
      <Router>
        {navbarVisible && <Navbar />}

        <Routes>
          <Route path="/" element={<Home setNavbarVisible={setNavbarVisible} />} />
          <Route path="/experience" element={<div>Experience</div>} />
          <Route path="/aboutus" element={<div>About Us</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
