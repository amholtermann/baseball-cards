export const fetchRoster = async (teamId) => {
  return fetch(
    "https://statsapi.mlb.com/api/v1/teams/" +
      teamId +
      "/roster/active?season=2023"
  ).then((data) => data.json());
};
