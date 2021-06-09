import React from "react";
import "./Icon.scss";
import * as Icons from "../../theme/icons";

const Icon = (props) => {
  const { type, color, filled, className } = props;
  const iconJsx = Icon[type];
  if (!iconJsx) {
    return null;
  }
  return (
    <div className={`svg-icon svg-icon--${type} ${className}`}>
      {iconJsx(color, filled)}
    </div>
  );
};

export default Icon;
