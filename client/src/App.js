import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/feeds" element={<Home />} />
        
      </Routes>
    </div>
    </Router >
  );
}
