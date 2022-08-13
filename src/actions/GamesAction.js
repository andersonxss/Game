import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Api } from "service/baseUrl";
import { OrderGroupTitleGame, GenerateMatch, Sleep } from "utils";
import {
  setAddItemGamesStore,
  setDeleteItemGamesStore,
  getListGamesStore,
  resetGamesStore,
  stateLoading,
  setResultFinalGamesStore,
} from "../store/Games.store";

const GamesAction = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { listCheckGames } = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(resetGamesStore());
  }, [dispatch]);

  const getListGamesaction = async () => {
    dispatch(stateLoading(true));
    await Sleep(3000);

    return Api.get(`/Competidores?copa=games`)
      .then((response) => {
        dispatch(getListGamesStore(response.data));
      })
      .catch((error) => {})
      .finally(() => {
        dispatch(stateLoading(false));
      });
  };

  const setAddItemGamesAction = async (data) => {
    //Checar se o game já se encontra alocando na lista
    const checkGamesIndex = listCheckGames.findIndex(
      (elem) => elem.id === data.id
    );

    //Se existir, remova o game
    if (checkGamesIndex !== -1) {
      await dispatch(setDeleteItemGamesStore(data.id));
    } else {
      await dispatch(setAddItemGamesStore(data));
    }
  };

  const generateGames = async (listGamesSelect, fase = "oitavas-finais") => {
    let limiteGames = listGamesSelect.length - 1;
    let newListGames = [];
    let countLimites;
    if (fase === "oitavas-finais") {
      const retorno = await OrderGroupTitleGame(listGamesSelect);
      listGamesSelect = retorno;
    }

    switch (fase) {
      case "oitavas-finais":
        fase = "quartas-finais";
        countLimites = 4;
        break;

      case "quartas-finais":
        fase = "semi-final";
        countLimites = 2;
        break;

      case "semi-final":
        fase = "final";
        countLimites = 1;
        break;

      default:
        break;
    }

    listGamesSelect.map((elem) => {
      if (limiteGames >= countLimites) {
        console.log(
          `Game1: Titulo - ${elem.titulo} - Nota - ${elem.nota} - Ano - ${elem.ano} -`
        );
        console.log(
          `Game2: Titulo - ${listGamesSelect[limiteGames].titulo} - Nota - ${listGamesSelect[limiteGames].nota} - Ano - ${listGamesSelect[limiteGames].ano} -`
        );

        const retorno = GenerateMatch(elem, listGamesSelect[limiteGames]);
        console.log(
          `Resultado: Titulo - ${retorno.titulo} - Nota - ${retorno.nota} - Ano - ${retorno.ano} -`
        );
        newListGames.push(retorno);
      }
      limiteGames--;
      return newListGames;
    });

    if (fase !== "final") {
      generateGames(newListGames, fase);
    } else {
      const gameCampeao = newListGames[0];
      const gameViceCampeo = listGamesSelect.filter(
        (elem) => elem.id !== newListGames[0].id
      )[0];
      dispatch(
        setResultFinalGamesStore({
          gameCampeao: gameCampeao,
          gameViceCampeo: gameViceCampeo,
        })
      );
      history(`/ResultGames`);
    }
  };

  return { generateGames, getListGamesaction, setAddItemGamesAction };
};

export default GamesAction;
