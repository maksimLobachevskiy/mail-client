import React, { useRef } from "react";
import { Redirect } from "react-router";

const Login = (props) => {
  const { authenticated, setUser } = props;

  const loginRef = useRef(null);
  const passwordRef = useRef(null);

  const loginUser = (e) => {
    e.preventDefault();
    const loginBody = {
      login: loginRef.current.value,
      password: passwordRef.current.value,
    };
    setUser(loginBody);
  };

  if (authenticated) {
    return <Redirect to='/inbox/' />;
  }

  return (
    <form onSubmit={loginUser}>
      <div>
        <input type='text' name='login' placeholder='Login' ref={loginRef} />
      </div>
      <div>
        <input
          type='password'
          name='password'
          placeholder='Password'
          ref={passwordRef}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Login;
