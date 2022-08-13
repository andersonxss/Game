import React from "react";
import Rotas from "Rotas";
import { Header, Main } from "components";
import "./common/App.scss";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Main>
        <Rotas />
      </Main>
    </div>
  );
};

export default App;
