function DiscountBadge(Props) {
  return (
    <span
      className="badge text-bg-primary"
      style={
        Props.direction === "left"
          ? {
              float: Props.direction,
              opacity: 0.8,
              margin: "-0.5rem 0rem 0rem -0.7rem",
            }
          : {
              float: Props.direction,
              opacity: 0.8,
              margin: "-0.5rem -0.7rem 0rem 0rem",
            }
      }
    >
      TOP 5<br></br>50%<br></br>OFF
    </span>
  );
}

export default DiscountBadge;
