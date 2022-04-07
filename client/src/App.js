import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
import { Router, Routes, Route } from "react-router-dom"



export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Login />} /> */}
        <Route path="/home" element={<Home />} />
        {/* <Route exact path="/Profile/:username" element={<Profile />} /> */}

      </Routes>
    </Router>
  );
}
