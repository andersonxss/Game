import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Games, ResultGames } from "./views";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Games" exact element={<Games />} />
      <Route path="/ResultGames" exact element={<ResultGames />} />
    </Routes>
  );
};

export default Rotas;
