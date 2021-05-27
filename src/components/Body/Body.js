import React, { PureComponent } from "react";

class Body extends PureComponent {
  render() {
    const { message, logInUser } = this.props;
    return (
      <div className="app-body">
        <h2 className="title">This is Body</h2>
        <div>{message}</div>
        <button onClick={logInUser}>Log in</button>
      </div>
    );
  }
}

export default Body;
