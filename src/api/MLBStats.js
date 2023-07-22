export const fetchRoster = async (teamId) => {
  return fetch(
    "https://statsapi.mlb.com/api/v1/teams/" +
      teamId +
      "/roster/active?season=2023"
  ).then((data) => data.json());
};
export const fetchPlayerStats = async (playerId) => {
  const responseStats = await fetch(
    "https://statsapi.mlb.com/api/v1/people/" +
      playerId +
      "?hydrate=stats(type=[sabermetrics],sportId=1)"
  );
  return await responseStats.json();
};
