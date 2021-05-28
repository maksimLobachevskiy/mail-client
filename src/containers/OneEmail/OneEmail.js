import React, { PureComponent } from "react";
import Email from "../../components/Email/Email";

class OneEmail extends PureComponent {
  render() {
    const { match, emails } = this.props;
    const emailId = match.params.emailId;

    const email = emails.find((e) => e.id === +emailId);

    return <Email email={email} showText />;
  }
}

export default OneEmail;
