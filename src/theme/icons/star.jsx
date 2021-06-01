import React from "react";

const starIcon = (color, filled) => (
  <svg
    id='star'
    xmlns='http://www.w3.org/2000/svg'
    width='30'
    height='30'
    viewBox='0 0 48 48'
    fill='none'
    cursor='pointer'
  >
    <path
      d='M34.865,39.83l-10.25-5.621-10.153,5.8,2.091-11.647L7.99,20.335l11.542-1.577L24.394,8l5.042,10.672L41,20.047l-8.426,8.173Z'
      strokeWidth={3}
      stroke={filled ? color || "#ffc107" : "none"}
      fill={filled ? "none" : color || "#ffc107"}
    />
  </svg>
);

export default starIcon;
