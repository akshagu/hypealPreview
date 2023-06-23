import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

//Import Pages lazily
const KYC = React.lazy(() => import("./pages/KYC"));
const Navbar = React.lazy(() => import("./components/Navbar"));

function App() {
  const isIframe = (window.location !== window.parent.location);

  return (
    <Router>
      {!isIframe && <Navbar/>}
      <Routes>
        <Route path="/" element={<KYC />} />
        <Route path="/kyc" element={<KYC />} />
      </Routes>
    </Router>
  );
}

export default App;
