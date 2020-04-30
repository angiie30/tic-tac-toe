import { getPlayers } from "../../shared/localStorage";

export const isAuthenticated = () => {
  const players = getPlayers();

  return players !== undefined && players !== null;
};

export default isAuthenticated;
