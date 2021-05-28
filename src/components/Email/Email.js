import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Email extends PureComponent {
  render() {
    const { email, showText } = this.props;

    if (!email) {
      return null;
    }

    return (
      <div>
        <div>{email.topic}</div>
        {showText && <div>{email.text}</div>}
      </div>
    );
  }
}

Email.propTypes = {
  email: PropTypes.object.isRequired,
  showText: PropTypes.bool,
};

Email.defaultProps = {
  showText: false,
};

export default Email;
