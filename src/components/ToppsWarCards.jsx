import Header from "./Header";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import { fetchRoster, fetchPlayerStats } from "../api/MLBStats";

function ToppsWarCards() {
  const [currentCard, setCurrentCard] = useState(0);
  const [cardData, setCardData] = useState([]);
  const [dataFetched, setDataFetched] = useState(false);
  useEffect(() => {
    fetchUserData().then(() => setDataFetched(true));
  }, []);

  const fetchUserData = async () => {
    const responseRoster = await fetchRoster(121);
    const statRoster = await Promise.all(
      responseRoster.roster.map(async (person, personIndex) => {
        const pId = person.person.id;
        const jerseyNumber = person.jerseyNumber;
        const pName = person.person.fullName;
        const responseStats = await fetchPlayerStats(pId);
        let war = 0;
        if (
          Object.hasOwn(responseStats, "people") &&
          Object.hasOwn(responseStats.people, "0") &&
          Object.hasOwn(responseStats.people[0], "stats")
        ) {
          war = responseStats.people[0].stats[0].splits[0].stat.war;
        }
        return {
          stat: { war: war },
          player: { id: pId, fullName: pName },
          id: personIndex,
          jerseyNumber: jerseyNumber,
          icon:
            "https://midfield.mlbstatic.com/v1/people/" +
            pId +
            "/spots/120?zoom=1.2",
          headshot:
            "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_213,q_auto:best/v1/people/" +
            pId +
            "/headshot/67/current",
          pic:
            "https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:action:hero:current.jpg/q_auto:good,w_1500/v1/people/" +
            pId +
            "/action/hero/current",
          pic2:
            "https://img.mlbstatic.com/mlb-photos/image/upload/w_700,q_auto:good/v1/people/" +
            pId +
            "/action/hero/current",
          link: "https://www.mlb.com/player/" + pId,
        };
      })
    );
    const sortedRoster = statRoster.sort(
      (a, b) => (a.stat.war > b.stat.war ? -1 : 1) //Highest First
    );
    return setCardData(sortedRoster);
  };

  return (
    <>
      <div className="mt-4 p-3 container border border-dark rounded bg-mets-primary">
        <Header />
        <div className="">
          <Carousel
            dataFetched={dataFetched}
            currentCard={currentCard}
            cardData={cardData}
            setCurrentCard={setCurrentCard}
          />
        </div>
      </div>
    </>
  );
}

export default ToppsWarCards;
