import React from "react";
import "./App.scss";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const initialState = {
  currentUser: {
    name: "Andrew",
    age: 31,
    hasEmail: true,
  },
  title: "Hello world",
};

class App extends React.Component {
  state = initialState;

  updateTitle = () => {
    this.setState({ title: "New Title" });
  };

  incrementAge = () => {
    const { currentUser } = this.state;
    this.setState({
      currentUser: { ...currentUser, age: currentUser.age + 1 },
    });
  };

  render() {
    const { currentUser, title } = this.state;
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
        <header className="App-header">{title}</header>
        <div>Current user name: {currentUser.name}</div>
        <div>Current user age: {currentUser.age}</div>
        <button onClick={this.updateTitle}>Update title</button>
        <button onClick={this.incrementAge}>Increment age</button>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">Hello World!</header>
//     </div>
//   );
// }

export default App;
