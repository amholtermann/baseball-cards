export const fetchPlayerStats = async (playerId) => {
  const responseStats = await fetch(
    "https://statsapi.mlb.com/api/v1/people/" +
      playerId +
      "?hydrate=stats(type=[sabermetrics],sportId=1)"
  );
  return await responseStats.json();
};
