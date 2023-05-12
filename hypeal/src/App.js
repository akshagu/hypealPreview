import React from "react";
import './App.css';

//Import Pages lazily
const Home = React.lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
