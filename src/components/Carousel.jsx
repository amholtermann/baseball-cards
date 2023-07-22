import PlayerCard from "./PlayerCard.jsx";
import { forwardRef } from "react";

const Carousel = forwardRef(function (Props, ref) {
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
                ref={ref}
                currentCard={Props.currentCard}
                key={playerIndex}
                playerIndex={playerIndex}
                playerObj={playerObj}
                setCurrentCard={Props.setCurrentCard}
                currentTriangleHalfBase={Props.currentTriangleHalfBase}
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
});
Carousel.displayName = "Carousel";

export default Carousel;
