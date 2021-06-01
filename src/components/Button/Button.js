import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { children, onClick, color } = props;
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: "green",
};

export default Button;
