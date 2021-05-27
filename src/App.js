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

  logInUser = () => {
    this.setState({
      currentUser: { name: "Andrew", age: 31, hasEmail: true },
    });
  };

  render() {
    const { currentUser, title } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <Header user={currentUser} />
          <Body message={title} logInUser={this.logInUser} />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
