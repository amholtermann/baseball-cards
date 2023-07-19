import PlayerCard from "./PlayerCard.jsx";

function Carousel(Props) {
  return (
    <>
      {console.log("cardData")}
      {console.log(Props.cardData)}
      {Props.cardData.length && Object.hasOwn(Props.cardData[0], "player") ? (
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{ flexWrap: "nowrap", overflowX: "scroll" }}
        >
          {Props.cardData.map((playerObj, playerIndex) => {
            return (
              <PlayerCard
                currentCard={Props.currentCard}
                key={playerIndex}
                playerIndex={playerIndex}
                playerObj={playerObj}
                setCurrentCard={Props.setCurrentCard}
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
    </>
  );
}
export default Carousel;
