import React, { PureComponent } from "react";
import EmailCards from "../EmailCrads/EmailCards";
import PropTypes from "prop-types";

class Body extends PureComponent {
  render() {
    const { emails } = this.props;

    return (
      <div className='app-body'>
        <EmailCards emails={emails} />
      </div>
    );
  }
}

Body.propTypes = {
  message: PropTypes.string,
  emails: PropTypes.array.isRequired,
  children: PropTypes.string,
};

Body.defaultProps = {
  message: "This is default message in default Props",
};
export default Body;
