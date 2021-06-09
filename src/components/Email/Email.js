import React from "react";
import PropTypes from "prop-types";
import starIcon from "../../theme/icons/star.jsx";
import { Link } from "react-router-dom";
import "./Email.scss";

const Email = (props) => {
  const { email, showFullPage } = props;
  if (!email) {
    return null;
  }

  return (
    <div className='email-card'>
      {showFullPage && (
        <div>
          <Link to='/inbox/'>Back</Link>
        </div>
      )}
      <div>{email.topic}</div>
      {showFullPage && <div>{email.text}</div>}
      <div>
        {starIcon("red", true)} {starIcon("red", false)}
      </div>
      {showFullPage && (
        <div>
          <Link to={`/inbox/${email.id - 1}`}>Previous</Link>
          <Link to={`/inbox/${email.id + 1}`}>Next</Link>
        </div>
      )}
    </div>
  );
};

Email.propTypes = {
  email: PropTypes.object.isRequired,
  showFullPage: PropTypes.bool,
};

Email.defaultProps = {
  showFullPage: false,
};

export default Email;
