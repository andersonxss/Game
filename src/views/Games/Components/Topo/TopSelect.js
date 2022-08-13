import React from "react";
import { Button } from "components";
import { Box, Typography } from "@mui/material";
import { GamesHooks } from "hooks";
import { GamesAction } from "actions";
import "../../Games.scss";

const TopSelect = () => {
  const { listCheckGames } = GamesHooks();
  let countItemGameChecked = listCheckGames.length;
  const { generateGames } = GamesAction();
  return (
    <Box className="topSelect">
      <Typography className="select">
        <span>{countItemGameChecked} de 8</span>selecionados
      </Typography>
      <Button
        disabled={countItemGameChecked >= 8 ? false : true}
        onClick={() => generateGames(listCheckGames)}
      >
        Gerar campeonato
      </Button>
    </Box>
  );
};

export default TopSelect;
