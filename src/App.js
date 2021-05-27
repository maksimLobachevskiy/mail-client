import React from "react";
import "./App.scss";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

class App extends React.Component {
  state = {
    currentUser: null,
    title: "Hello world",
  };

  updateTitle = () => {
    this.setState({ title: "New Title" });
  };

  incrementAge = () => {
    const { currentUser } = this.state;
    this.setState({
      currentUser: { ...currentUser, age: currentUser.age + 1 },
    });
  };

  logInUser = () => {
    this.setState({
      name: "Andrew",
      age: 31,
      hasEmail: true,
    });
  };

  render() {
    const { currentUser, title } = this.state;
    const isLogIn = currentUser !== null;
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
        <header className="App-header">{title}</header>
        <div>{!isLogIn && "You are not logged in"}</div>
        {isLogIn && (
          <>
            <div>Current user name: {currentUser.name}</div>
            <div>Current user age: {currentUser.age}</div>
            <div>Has email: {currentUser.hasEmail}</div>
          </>
        )}

        <button onClick={this.updateTitle}>Update title</button>
        <button onClick={this.incrementAge}>Increment age</button>
        <button onClick={this.logInUser}>Log in</button>
      </div>
    );
  }
}

export default App;
