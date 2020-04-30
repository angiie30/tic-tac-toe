const PLAYERS = "players";

export const setPlayers = (players) => {
  localStorage.setItem(PLAYERS, JSON.stringify(players));
};

export const getPlayers = () => {
  return JSON.parse(localStorage.getItem(PLAYERS));
};

export default getPlayers;
