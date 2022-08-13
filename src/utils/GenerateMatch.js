const GenerateMatch = (game1, game2) => {
  //Os dois times possuem a mesma nota
  if (game1.nota === game2.nota) {
    //Se a nota do game1 for igual do game2 e ano do gam1 for igual do game2
    //Game 1 sera campeao
    if (game1.nota === game2.nota && game1.ano === game2.ano) {
      console.log("Game1 campeao por empate entre nota e ano");
      return game1;
    } else if (game1.ano > game2.ano) {
      //Se ano game 1 for maior que game2
      console.log("Game1 campeao por ter o ano de lancamento maior que game2");
      // game1 sera campeao
      return game1;
    } else {
      console.log("Game2 campeao por ter o ano de lancamento maior que game1");
      //Se nao o game2 sera campeao
      return game2;
    }
  } else {
    //Se nota do game1 for maior que game2
    if (game1.nota > game2.nota) {
      //Game1 sera campeo
      console.log("Game1 campeao por ter a nota maior que game2");
      return game1;
    } else {
      //Se nao o game2 sera campeo
      console.log("Game2 campeao por ter a nota maior que game1");
      return game2;
    }
  }
};

export default GenerateMatch;
