import React from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import { Home, Games, ResultGames, NotFound } from "./views";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Games" exact element={<Games />} />
      <Route path="/ResultGames" exact element={<ResultGames />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Rotas;
