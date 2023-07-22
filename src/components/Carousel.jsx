import PlayerCard from "./PlayerCard.jsx";
import { useState, useEffect, useRef } from "react";

const Carousel = function (Props) {
  const cardRef = useRef();
  const [currentTriangleHalfBase, setTriangleHalfBase] = useState(0);
  useEffect(() => {
    fixCardBuy();
    window.addEventListener("resize", fixCardBuy);
    return () => {
      window.removeEventListener("resize", fixCardBuy);
    };
  }, []);

  const fixCardBuy = () => {
    if (cardRef?.current?.clientWidth) {
      const newBorderWidth = cardRef.current.clientWidth / 2;
      setTriangleHalfBase(newBorderWidth);
    }
  };
  return (
    <div className="rounded" style={{ overflowX: "scroll" }}>
      {/* {console.log("cardData")}
      {console.log(Props.cardData)} */}
      {Props.cardData.length && Object.hasOwn(Props.cardData[0], "player") ? (
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{ flexWrap: "nowrap" }}
        >
          {Props.cardData.map((playerObj, playerIndex) => {
            return (
              <PlayerCard
                ref={cardRef}
                currentCard={Props.currentCard}
                key={playerIndex}
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
Carousel.displayName = "Carousel";

export default Carousel;
