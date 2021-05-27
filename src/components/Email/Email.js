import React, { PureComponent } from "react";

class Email extends PureComponent {
  render() {
    const { email } = this.props;
    return <div>{email.topic}</div>;
  }
}

export default Email;
