import TriangleBottom from "./TriangleBottom";
import DiscountBadge from "./DiscountBadge";
function PlayerCard(Props) {
  // return (<li key={Props.key}>{Props.playerName}</li>)
  return (
    <div
      className="col"
      style={{
        marginLeft: Props.playerIndex !== 0 ? "-20rem" : "",
        zIndex:
          Props.currentCard !== Props.playerIndex
            ? Props.currentCard < Props.playerIndex
              ? 40 - Props.playerIndex
              : Props.playerIndex
            : 1030,
      }}
    >
      <div
        className="card h-100"
        onMouseOver={() => Props.setCurrentCard(Props.playerIndex)}
      >
        {/* <img
          src={
            "https://img.mlbstatic.com/mlb-photos/image/upload/w_700,q_auto:good/v1/people/" +
            Props.playerObj.player.id +
            "/action/hero/current"
          }
          className="card-img-top img-thumbnail"
          alt="..."
        />  */}
        <div
          className="card-body"
          style={{
            cursor: "pointer",
            backgroundImage: "url('" + Props.playerObj.pic + "')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "12rem",
          }}
        >
          {Props.playerIndex < 5 && <DiscountBadge></DiscountBadge>}
          <TriangleBottom></TriangleBottom>
          <div
            style={{
              color: "white",
              fontWeight: "bold",
              marginTop: "4.5rem",
              position: "relative",
            }}
          >
            BUY CARD
          </div>
        </div>
        <div className="card-footer">
          {/* <img src={Props.playerObj.icon} style={{maxWidth:"15%",float:"left"}} alt="..." /> */}
          <div className="row">
            <div
              className="col"
              style={{
                backgroundImage:
                  Props.currentCard !== Props.playerIndex
                    ? Props.currentCard > Props.playerIndex
                      ? "url('" + Props.playerObj.icon + "')"
                      : ""
                    : "",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
            <div className="col-9">
              <small
                className="text-body-dark align-middle"
                style={{ display: "block" }}
              >
                {Props.playerObj.player.fullName}
                &nbsp;
                <a
                  href={Props.playerObj.link}
                  target="_blank"
                  rel="noreferrer"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  data-bs-title="More Stats"
                >
                  <i
                    className="bi bi-info-circle"
                    style={{ color: "cornflowerblue" }}
                  ></i>
                </a>
              </small>
              <small className="text-body-secondary align-middle">
                Total War: {Props.playerObj.stat.war}
              </small>
            </div>
            <div
              className="col"
              style={{
                backgroundImage:
                  Props.currentCard !== Props.playerIndex
                    ? Props.currentCard < Props.playerIndex
                      ? "url('" + Props.playerObj.icon + "')"
                      : ""
                    : "",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
