import PlayerCard from './PlayerCard.jsx'

function Carousel(Props) {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">{Props.cardData.map((player)=>{
            return <PlayerCard key={player.player.id} playerObj={player} />
        })}</div>
    );

}
export default Carousel;