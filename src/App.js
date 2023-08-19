// import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Profile from './Components/Profile';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/page" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
