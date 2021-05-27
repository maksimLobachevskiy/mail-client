import React, { PureComponent } from "react";
import Email from "../Email/Email";

class EmailCards extends PureComponent {
  render() {
    const { emails } = this.props;
    const emailCards = emails
      .filter((email) => !email.hidden)
      .map((email) => <Email key={email.id} email={email} />);
    return <div>{emailCards}</div>;
  }
}

export default EmailCards;
