import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { GamesAction } from "actions";
import { GamesHooks } from "hooks";
import CardsGamesItem from "./CardsGamesItem";
import SkeletonGames from "./SkeletonGames";
import "../../Games.scss";

const CardsGames = () => {
  const { getListGamesaction } = GamesAction();
  const { loading, listGames } = GamesHooks();
  useEffect(() => {
    getListGamesaction();
  }, []);

  return loading ? (
    <SkeletonGames />
  ) : (
    <Box className="containerCardsGames">
      {listGames.map((elem, index) => {
        return <CardsGamesItem props={elem} key={index} />;
      })}
    </Box>
  );
};

export default CardsGames;
