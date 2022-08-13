import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, AlertTitle, Box, Container } from "@mui/material";
import TopResultGames from "./Components/Topo/TopResultGames";
import "./ResultGames.scss";
import { Button } from "components";
import CardResultGames from "./Components/Cards/CardResultGame";
import { GamesHooks } from "hooks";
const Index = () => {
  const { resultFinalGames } = GamesHooks();

  useEffect(() => {
    console.log(resultFinalGames);
  }, [resultFinalGames]);

  return (
    <Box>
      <TopResultGames />
      <Box className="resultGamesContainer">
        <Container fixed={true}>
          {Object.values(resultFinalGames).length > 0 ? (
            <>
              <Box
                display="flex"
                alignItems="baseline"
                justifyContent="center"
                gap={5}
                mt={8}
                mb={5}
              >
                <CardResultGames
                  posicao="primeiroColocado"
                  props={resultFinalGames.gameCampeao}
                />
                <CardResultGames
                  posicao="segundoColocado"
                  props={resultFinalGames.gameViceCampeo}
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="50px"
              >
                <Link to="/Games">
                  <Button>Refazer campeonato</Button>
                </Link>
              </Box>
            </>
          ) : (
            <Box mt={10}>
              <Alert variant="outlined" severity="warning">
                <AlertTitle>Atenção</AlertTitle>
                Nenhum resultado encontrado.
              </Alert>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
