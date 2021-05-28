import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { children, onClick, color } = this.props;
    return (
      <button style={{ backgroundColor: color }} onClick={onClick}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: "green",
};

export default Button;
