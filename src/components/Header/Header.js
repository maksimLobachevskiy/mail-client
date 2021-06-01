import React from "react";

const Header = (props) => {
  const { user } = props;
  const isLogIn = user !== null;
  return (
    <>
      <div>This is a header</div>
      <div>{!isLogIn && "You are not logged in"}</div>
      {isLogIn && <div>Current user: {user.login}</div>}
    </>
  );
};

export default Header;
