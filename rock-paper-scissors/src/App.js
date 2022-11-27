import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import GameModeOne from "./pages/GameModeOne";
import GameModeTwo from "./pages/GameModeTwo";


function App() {
  return (
    <div className="container mt-5">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modeOne" element={<GameModeOne />} />
          <Route path="/modeTwo" element={<GameModeTwo />} />
          <Route path="*" element={<notFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
