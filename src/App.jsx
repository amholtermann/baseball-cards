import Header from "./components/Header";
import Carousel from "./components/Carousel";
import { useState, useEffect } from "react";
import { fetchRoster } from "./api/roster";
import { fetchPlayerStats } from "./api/stats";

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    const responseRoster = await fetchRoster(121);
    const statRoster = await Promise.all(
      responseRoster.roster.map(async (person, personIndex) => {
        const pId = person.person.id;
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
          icon:
            "https://midfield.mlbstatic.com/v1/people/" +
            pId +
            "/spots/120?zoom=1.2",
          pic:
            "https://img.mlbstatic.com/mlb-photos/image/upload/w_700,q_auto:good/v1/people/" +
            pId +
            "/action/hero/current",
        };
      })
    );
    return setCardData(statRoster);
  };
  return (
    <>
      <div className="mt-4 p-3 container border border-dark rounded bg-mets-primary">
        <Header />
        <div className="container">
          <Carousel
            currentCard={currentCard}
            cardData={cardData}
            setCurrentCard={setCurrentCard}
          />
        </div>
      </div>
    </>
  );
}

export default App;
