// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import { Home } from '@/pages/Home';
import { Experiences } from "./pages/Experiences";

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/aboutus" element={<div>About Us</div>} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
