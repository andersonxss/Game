function Sleep(number) {
  return new Promise((resolve) => setTimeout(resolve, number));
}

export default Sleep;
