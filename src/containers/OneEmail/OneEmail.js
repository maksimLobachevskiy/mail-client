import React from "react";
import Email from "../../components/Email/Email";

const OneEmail = (props) => {
  const { match, emails } = props;
  const emailId = match.params.emailId;

  const email = emails.find((e) => e.id === +emailId);

  return <Email email={email} showText />;
};

export default OneEmail;
