import { forwardRef } from "react";
export const TriangleBottom = forwardRef(function (Props, ref) {
  const triangleStyle = Props.currentTriangleHalfBase //Border Width State has been set
    ? {
        top: "7rem",
        position: "relative",
        margin: "0rem 0rem 0rem -1rem",
        borderLeftWidth: Props.currentTriangleHalfBase + "px",
        borderRightWidth: Props.currentTriangleHalfBase + "px",
      }
    : {
        top: "7rem",
        position: "relative",
        margin: "0rem 0rem 0rem -1rem",
      };
  return <div ref={ref} className="triangle-up" style={triangleStyle}></div>;
});
TriangleBottom.displayName = "TriangleBottom";
export default TriangleBottom;
