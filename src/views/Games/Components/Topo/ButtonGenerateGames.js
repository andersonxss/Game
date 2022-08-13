import React from "react";
import { Button } from "components";
import { GamesHooks } from "hooks";
import { GamesAction } from "actions";

const ButtonGenerateGames = () => {
  const { listCheckGames } = GamesHooks();
  let countItemGameChecked = listCheckGames.length;
  const { generateGames } = GamesAction();

  return (
    <Button
      disabled={countItemGameChecked >= 8 ? false : true}
      onClick={() => generateGames(listCheckGames)}
    >
      Gerar campeonato
    </Button>
  );
};

export default ButtonGenerateGames;
