import React, { PureComponent } from "react";

class Header extends PureComponent {
  componentDidMount() {
    console.log("componentDidMount, Header.js");
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate, Header.js");
  }
  render() {
    const { user } = this.props;
    const isLogIn = user !== null;
    return (
      <>
        <div>This is a header</div>
        <div>{!isLogIn && "You are not logged in"}</div>
        {isLogIn && (
          <>
            <div>Current user name: {user.name}</div>
            <div>Current user age: {user.age}</div>
            <div>Has email: {user.hasEmail}</div>
          </>
        )}
      </>
    );
  }
}

export default Header;
