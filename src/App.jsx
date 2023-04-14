// React
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components
import { Home } from '@/pages/Home';
import { Experiences } from "./pages/Experiences";
import { Daytrips } from "./pages/Daytrips";
import { Food } from "./pages/Food";
import { Payment } from "./pages/Payment";

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/daytrips" element={<Daytrips />} />
          <Route path="/food" element={<Food />} />
          <Route path="/aboutus" element={<div>About Us</div>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
