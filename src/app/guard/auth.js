function isAuthenticated() {
  const firstPlayerName = localStorage.getItem("firstPlayer");
  const secondPlayerName = localStorage.getItem("secondPlayer");

  return (
    firstPlayerName !== null &&
    secondPlayerName !== null &&
    firstPlayerName !== "" &&
    secondPlayerName !== ""
  );
}

export default isAuthenticated;
