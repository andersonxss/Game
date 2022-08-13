const OrderGroupTitleGame = (list) => {
  return list.sort(function (a, b) {
    if (a.titulo < b.titulo) return -1;
    if (a.titulo > b.titulo) return 1;
    return 0;
  });
};

export default OrderGroupTitleGame;
