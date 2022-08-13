import * as React from "react";
import { Card, CardContent, CardMedia, Zoom, Typography } from "@mui/material";
import { ConfgParams } from "utils";

export default function MediaCard({ posicao, props }) {
  const newData = ConfgParams(props);
  const { ano, titulo, urlImagem, nameConsole } = newData;
  return (
    <Zoom
      in={true}
      style={{
        transitionDelay: posicao === "primeiroColocado" ? "10ms" : "500ms",
      }}
    >
      <Card
        className={
          posicao === "primeiroColocado"
            ? "resultGamesCardsPrimeiroColocado"
            : "resultGamesCardsSegundoColocado"
        }
      >
        <CardMedia component="img" image={urlImagem} alt={titulo} />
        <CardContent className="resultGamesCardsContainer">
          <Typography className="titulo">
            {posicao === "primeiroColocado"
              ? "Primeiro lugar"
              : "Segundo lugar"}
          </Typography>
          <Typography className="game">{titulo}</Typography>
          <Typography className="anoConseole">
            {ano} / {nameConsole}
          </Typography>
        </CardContent>
      </Card>
    </Zoom>
  );
}
