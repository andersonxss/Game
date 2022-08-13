import { render, screen } from "@testing-library/react";
import CardsGames from "../views/Games/Components/CardsGames/CardsGames";

// test("check item id games should match", () => {
//   const obj = {
//     id: "111",
//     productName: "Jest Handbook",
//     url: "https://jesthandbook.com",
//   };

//   expect(obj.id).toEqual("111");
// });

let arr = [];
function teste(dados) {
  arr.push(dados);
  return 111;
}

test("ADD item id games", () => {
  const obj = {
    id: "1113",
    productName: "Jest Handbook",
    url: "https://jesthandbook.com",
  };

  expect(teste(obj)).toEqual(111);
  console.log(arr);
});
