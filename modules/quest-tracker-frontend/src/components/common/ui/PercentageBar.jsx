function PercentageBar({ colorCode, percentage, customClassName }) {
  return (
    <div
      className={"h-3 rounded-md " + customClassName}
      style={{ background: `${colorCode}5f` }}
    >
      <span
        className="h-3 rounded-md block"
        style={{
          width: `${percentage}%`,
          background: colorCode,
        }}
      ></span>
    </div>
  );
}

export default PercentageBar;
