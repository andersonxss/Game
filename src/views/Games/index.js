import React from "react";
import { Box, Container, Hidden } from "@mui/material";
import TopGames from "./Components/Topo/TopGames";
import TopTitleGames from "./Components/Topo/TopTitleGames";
import TopSelect from "./Components/Topo/TopSelect";
import CardsGames from "./Components/CardsGames/CardsGames";
import Footer from "./Components/Footer";

const Games = () => {
  return (
    <Box>
      <TopGames />
      <Box className="containerGames">
        <Container fixed={true}>
          <TopTitleGames />
          <TopSelect />
          <CardsGames />
        </Container>
      </Box>
      <Hidden smUp={true}>
        <Footer />
      </Hidden>
    </Box>
  );
};

export default Games;
