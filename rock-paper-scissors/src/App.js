import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import GameModeOne from "./components/GameModeOne/GameModeOne";
import GameModeTwo from "./components/GameModeTwo/GameModeTwo";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="container mt-5">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modeOne" element={<GameModeOne />} />
          <Route path="/modeTwo" element={<GameModeTwo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
