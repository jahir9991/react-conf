import React from "react";

const Spinner = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    style={{
      margin: "auto",
      background: "none",
      display: "block",
      shapeRendering: "auto",
    }}
    width="100px"
    height="100px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#111d5e"
      strokeWidth="5"
      r="19"
      strokeDasharray="89.5353906273091 31.845130209103033"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      />
    </circle>
  </svg>
);

export default Spinner;