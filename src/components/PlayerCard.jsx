import TriangleBottom from "./TriangleBottom";
import DiscountBadge from "./DiscountBadge";
import { forwardRef, useState } from "react";

const PlayerCard = forwardRef(function (Props, ref) {
  const { cardRef, scrollLeft, scrollRight, triangleRef } = ref;
  const [intervalIds, setIntervalIds] = useState([]);
  /*
  useImperativeHandle(
    ref,
    () => {
      return {
        cardRef: cardRef,
        triangleRef: triangleRef,
      };
    },
    []
  );
  */
  const StartScrolling = (direction) => {
    const id = setInterval(() => Props.handleScroll(direction), 50); // Adjust the interval speed as needed
    setIntervalIds((prevIntervalIds) => [...prevIntervalIds, id]);
  };
  const StopScrolling = () => {
    intervalIds.forEach((id) => clearInterval(id));
    setIntervalIds([]);
  };
  return (
    <>
      {Props.playerIndex === 0 && (
        <div
          className="col"
          style={{
            position: "sticky",
            left: 0,
            opacity: 0.6,
            backgroundColor: "black",
            // marginRight: Props.currentTriangleHalfBase * -2 * 0.2,
            // marginRight: "calc(var(--bs-gutter-x) * -0.5)",
            zIndex: 1060,
            width: "7%",
            color: "white",
          }}
          ref={scrollLeft}
          onMouseEnter={() => StartScrolling(-1)}
          onMouseLeave={() => StopScrolling()}
        >
          &lt;-
        </div>
      )}
      <div
        className="col"
        style={{
          marginLeft: Props.playerIndex !== 0 ? "-28%" : "",
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
          <div
            className="card-body"
            onClick={() =>
              Props.BuyCard(
                Props.playerObj.player.fullName,
                Props.playerObj.player.id
              )
            }
            style={{
              cursor: "pointer",
              backgroundImage: "url('" + Props.playerObj.pic + "')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "12rem",
            }}
            ref={cardRef}
          >
            {Props.playerIndex < 5 && <DiscountBadge></DiscountBadge>}
            <TriangleBottom
              ref={triangleRef}
              currentTriangleHalfBase={Props.currentTriangleHalfBase}
            ></TriangleBottom>
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
            <div
              className="row"
              style={{ marginLeft: "0px", marginRight: "0px" }}
            >
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
      {Props.playerIndex === Props.totalCards - 1 && (
        <div
          className="col"
          style={{
            position: "sticky",
            right: 0,
            opacity: 0.6,
            backgroundColor: "black",
            marginLeft: "calc(var(--bs-gutter-x) * -0.5)",
            // marginLeft: Props.currentTriangleHalfBase * -2 * 0.2,
            zIndex: 1060,
            width: "7%",
            color: "white",
          }}
          ref={scrollRight}
          onMouseEnter={() => StartScrolling(1)}
          onMouseLeave={() => StopScrolling()}
        >
          -&gt;
        </div>
      )}
    </>
  );
});
PlayerCard.displayName = "PlayerCard";

export default PlayerCard;
