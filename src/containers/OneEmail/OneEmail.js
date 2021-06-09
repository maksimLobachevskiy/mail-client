import React from "react";
import Email from "../../components/Email/Email";
import { withRouter } from "react-router-dom";

const OneEmail = (props) => {
  const { match, emails } = props;
  const emailId = match.params.emailId;

  const email = emails.find((e) => e.id === +emailId);

  return (
    <>
      <Email email={email} showFullPage />
    </>
  );
};

export default withRouter(OneEmail);
