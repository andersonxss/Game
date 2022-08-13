import { useSelector } from "react-redux";
const GamesHooks = () => {
  const { loading, listGames, listCheckGames, resultFinalGames } = useSelector(
    (state) => state.games
  );

  return {
    loading,
    listGames,
    listCheckGames,
    resultFinalGames,
  };
};

export default GamesHooks;
