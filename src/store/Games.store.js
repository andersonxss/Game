import { createSlice, current } from "@reduxjs/toolkit";

export const Games = createSlice({
  name: "Games",
  initialState: {
    loading: false,
    listGames: [],
    listCheckGames: [],
    resultFinalGames: [],
  },
  reducers: {
    stateLoading: (state, action) => {
      state.loading = action.payload;
    },
    resetGamesStore: (state) => {
      state.listCheckGames = [];
    },
    getListGamesStore: (state, action) => {
      state.listGames = action.payload;
    },
    setAddItemGamesStore: (state, action) => {
      let dadosListCheckGames = current(state.listCheckGames);
      state.listCheckGames = [...dadosListCheckGames, action.payload];
    },
    setDeleteItemGamesStore: (state, action) => {
      const id = action.payload;

      let dadosListCheckGames = current(state.listCheckGames);

      const newDataListCheckGames = dadosListCheckGames.filter(
        (elem) => elem.id !== id
      );
      state.listCheckGames = newDataListCheckGames;
    },
    setResultFinalGamesStore: (state, action) => {
      state.resultFinalGames = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAddItemGamesStore,
  setDeleteItemGamesStore,
  getListGamesStore,
  resetGamesStore,
  stateLoading,
  setResultFinalGamesStore,
} = Games.actions;

export default Games.reducer;
