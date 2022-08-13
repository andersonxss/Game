import React from "react";
import { Box, Container, Typography } from "@mui/material";
import CopaGamesWhite from "../../assets/CopaGamesWhite.svg";
import { Link } from "react-router-dom";
import "./Home.scss";
import { Button } from "components";

const Home = () => {
  return (
    <Box className="homeContainer">
      <Container fixed={true}>
        <Box className="homeDescricao">
          <Typography variant="h5" gutterBottom component="div">
            Boas vindas a
          </Typography>
          <img
            src={CopaGamesWhite}
            alt="Copa Games"
            className="copaGamesWhite"
          />
          <Typography variant="body2" gutterBottom>
            A Lambda3 está organizando uma Copa do Mundo de games, e precisamos
            de sua ajuda para determinar quais gamesestarão no pódio e quem é o
            grande campeão. O resultado de cada partida é determinado de acordo
            com a nota do público para cada um dos games.
          </Typography>
          <Box mt={4}>
            <Link to="/Games">
              <Button>Quero começar</Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
