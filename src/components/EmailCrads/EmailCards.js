import React from "react";
import Email from "../Email/Email";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EmailCards = (props) => {
  const { emails } = props;
  const emailCards = emails
    .filter((email) => !email.hidden)
    .map((email) => (
      <Link to={`/inbox/${email.id}`} key={email.id}>
        <Email email={email} />
      </Link>
    ));
  return <div>{emailCards}</div>;
};

EmailCards.propTypes = {
  emails: PropTypes.array.isRequired,
};

export default EmailCards;
