import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import PrivateRoute from "./privateRoutes/PrivateRoute";
import LoginPrivateRoute from "./privateRoutes/LoginPrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact element={<PrivateRoute />}>
            <Route exact path="/feeds" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
