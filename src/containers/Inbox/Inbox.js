import React from "react";
import EmailCards from "../../components/EmailCrads/EmailCards";

const Inbox = (props) => {
  const { emails } = props;
  return (
    <div className='app-body'>
      <EmailCards emails={emails} />
    </div>
  );
};

export default Inbox;
