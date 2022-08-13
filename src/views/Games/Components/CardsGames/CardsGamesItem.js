import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ConfgParams } from "utils";
import { GamesAction } from "actions";
import { GamesHooks } from "hooks";

const CardsGamesItem = ({ props }) => {
  const newData = ConfgParams(props);

  const { setAddItemGamesAction } = GamesAction();
  const { ano, titulo, urlImagem, nameConsole } = newData;
  const [checkItem, setCheckItem] = useState(false);

  const { listCheckGames } = GamesHooks();

  const selectItemGame = (data) => {
    setCheckItem(checkItem ? false : true);
    setAddItemGamesAction(data);
  };

  return (
    <Card
      className="CardsGamesItem"
      style={{
        display:
          listCheckGames.length === 8 && checkItem === false ? "none" : "block",
      }}
    >
      <div
        className={`CardsGamesItemImg ${checkItem && "CardsGamesItemActive"}`}
        onClick={() => selectItemGame(newData)}
      >
        <CardMedia component="img" image={urlImagem} alt="green iguana" />
      </div>
      <CardContent className="CardsGamesContent">
        <Typography gutterBottom className="nameGame">
          {titulo}
        </Typography>
        <Typography className="nameConsole">
          {ano} / {nameConsole}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardsGamesItem;
