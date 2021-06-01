import React from "react";
import PropTypes from "prop-types";
import starIcon from "../../theme/icons/star.jsx";
import "./Email.scss";

const Email = (props) => {
  const { email, showText } = props;
  if (!email) {
    return null;
  }

  return (
    <div>
      <div>{email.topic}</div>
      {showText && <div>{email.text}</div>}
      <div>
        {starIcon("red", true)} {starIcon("red", false)}
      </div>
    </div>
  );
};

Email.propTypes = {
  email: PropTypes.object.isRequired,
  showText: PropTypes.bool,
};

Email.defaultProps = {
  showText: false,
};

export default Email;
