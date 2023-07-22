export function TriangleBottom(Props) {
  return (
    <div
      className="triangle-up"
      style={{
        top: "7rem",
        position: "relative",
        margin: "0rem 0rem 0rem -1rem",
        borderLeftWidth: Props.currentTriangleHalfBase + "px",
        borderRightWidth: Props.currentTriangleHalfBase + "px",
      }}
    ></div>
  );
}
export default TriangleBottom;
