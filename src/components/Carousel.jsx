import PlayerCard from "./PlayerCard.jsx";

function Carousel(Props) {
  return (
    <div
      className="row row-cols-1 row-cols-md-3 g-4"
      style={{ flexWrap: "nowrap", overflowX: "scroll" }}
    >
      {Props.cardData.map((player, playerIndex) => {
        return (
          <PlayerCard
            currentCard={Props.currentCard}
            key={player.player.id}
            playerIndex={playerIndex}
            playerObj={player}
            setCurrentCard={Props.setCurrentCard}
          />
        );
      })}
    </div>
  );
}
export default Carousel;
