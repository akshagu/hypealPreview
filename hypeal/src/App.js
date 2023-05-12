import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

//Import Pages lazily
const Home = React.lazy(() => import("./pages/Home"));
const Navbar = React.lazy(() => import("./components/Navbar"));

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
