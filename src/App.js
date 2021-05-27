import React from "react";
import "./App.scss";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import axios from "axios";

class App extends React.Component {
  state = {
    currentUser: null,
    title: "Hello world",
    emails: [],
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.getCurrentUser();
      this.getEmails();
      this.setState({ isLoading: false });
    }, 1000);

    // console.log("componentDidMount, App.js");
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate, App.js");
  }

  getEmails = () => {
    axios.get("/api/emails").then((res) => this.setState({ emails: res.data }));
    // this.setState({ emails: emails });
  };

  getCurrentUser = () => {
    axios
      .get("/api/currentUser")
      .then((res) => this.setState({ currentUser: res.data }));
  };

  render() {
    const { currentUser, title, emails, isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <Header user={currentUser} />
          <Body message={title} emails={emails} />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
