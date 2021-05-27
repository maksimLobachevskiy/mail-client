import React, { PureComponent } from "react";
import EmailCards from "../EmailCrads/EmailCards";

class Body extends PureComponent {
  render() {
    const { message, emails } = this.props;

    return (
      <div className='app-body'>
        <h2 className='title'>This is Body</h2>
        <div>{message}</div>
        {/* <button onClick={logInUser}>Log in</button> */}
        <EmailCards emails={emails} />
      </div>
    );
  }
}

export default Body;
