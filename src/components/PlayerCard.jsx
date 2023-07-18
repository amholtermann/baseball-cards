
function PlayerCard (Props) {
    // return (<li key={Props.key}>{Props.playerName}</li>)
    return (
  <div className="col">
    <div className="card h-100">
      <img src={"https://img.mlbstatic.com/mlb-photos/image/upload/w_700,q_auto:good/v1/people/"+Props.playerObj.player.id+"/action/hero/current"} className="card-img-top img-thumbnail" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{Props.playerObj.player.fullName}</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div className="card-footer">
        {/* <img src={Props.playerObj.icon} style={{maxWidth:"15%",float:"left"}} alt="..." /> */}
        <small className="text-body-secondary align-middle">Total War: {Props.playerObj.stat.war}</small>
        {/* <small className="text-body-secondary align-middle">Last updated 3 mins ago</small> */}
      </div>
    </div>
  </div>)
}


export default PlayerCard