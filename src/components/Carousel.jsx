import PlayerCard from "./PlayerCard.jsx";
import { useState, useEffect, useRef } from "react";

const Carousel = function (Props) {
  const carouselRef = useRef();
  const cardRef = useRef();
  const triangleRef = useRef();
  const scrollLeft = useRef();
  const scrollRight = useRef();
  const [currentTriangleHalfBase, setTriangleHalfBase] = useState(0);

  useEffect(() => {
    if (Props.dataFetched) {
      const fixCardBuy = () => {
        const elem = cardRef.current;
        if (elem) {
          const newBorderWidth = elem.clientWidth / 2;
          setTriangleHalfBase(newBorderWidth);
        }
      };
      fixCardBuy();
      window.addEventListener("resize", fixCardBuy);
      return () => {
        window.removeEventListener("resize", fixCardBuy);
      };
    }
  }, [Props.dataFetched]);

  const handleScroll = (scrollDirection) => {
    const container = carouselRef.current;
    if (!container) return;

    const scrollAmount = 25; // Adjust the scroll speed as needed
    container.scrollLeft += scrollAmount * scrollDirection;
  };

  const BuyCard = (playerName, playerId) => {
    alert("Buy Card for Player: " + playerName + " Id: " + playerId);
  };
  const totalCards = Props.cardData.length;
  return (
    <div className="rounded" style={{ overflowX: "scroll" }} ref={carouselRef}>
      {totalCards && Object.hasOwn(Props.cardData[0], "player") ? (
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{ flexWrap: "nowrap" }}
        >
          {Props.cardData.map((playerObj, playerIndex) => {
            return (
              <PlayerCard
                handleScroll={handleScroll}
                ref={{ cardRef, scrollLeft, scrollRight, triangleRef }}
                totalCards={totalCards}
                currentCard={Props.currentCard}
                key={playerIndex}
                BuyCard={BuyCard}
                playerIndex={playerIndex}
                playerObj={playerObj}
                setCurrentCard={Props.setCurrentCard}
                currentTriangleHalfBase={currentTriangleHalfBase}
              />
            );
          })}
        </div>
      ) : (
        <div className="container">
          <div className="spinner-grow text-prilightmary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
