import React, { PureComponent } from "react";

class Login extends PureComponent {
  render() {
    return (
      <form>
        <div>
          <input type='text' name='login' placeholder='Login' />
        </div>
        <div>
          <input type='password' name='password' placeholder='Password' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default Login;
