import Flights from "./pages/Flights";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flights/:id" element={<Flights />} />
    </Routes>
  );
}

export default App;
