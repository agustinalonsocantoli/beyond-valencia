// React
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// Components
import { Home } from "./pages/Home";
import { Experiences } from "./pages/Experiences";
import { Daytrips } from "./pages/Daytrips";
// import { Food } from "./pages/Food";
import { Details } from "./pages/Details";
import { Options } from "./pages/Options";
import { Lockers } from "./pages/Lockers";
import { Bikes } from "./pages/Bikes";

function App() {

  return (
    <div className="app">
      <Router basename="/">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="experiences/*" element={<Experiences />} />
            <Route path="experiences/:slug" element={<Details />} />
            <Route path="daytrips/*" element={<Daytrips />} />
            <Route path="daytrips/slug" element={<Daytrips />} />
            {/* <Route path="food/*" element={<Food />} /> */}
            {/* <Route path="aboutus/*" element={<div>About Us</div>} /> */}
            <Route path="more-services/*" element={<Options />} />
            <Route path="lockers/*" element={<Lockers />} />
            <Route path="bikes/*" element={<Bikes />} />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
