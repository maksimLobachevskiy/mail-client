import React from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import axios from "axios";
import Sidebar from "./components/Sidebar/Sidebar";
import AppRoutes from "./routes/AppRoutes";

class App extends React.Component {
  state = {
    currentUser: null,
    title: "Hello world",
    emails: [],
    isLoading: true,
  };

  componentDidMount() {
    setTimeout(() => {
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

  render() {
    const { currentUser, emails, isLoading } = this.state;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <div className='App'>
        <header className='App-header'>
          <Header user={currentUser} />
          <Sidebar />
          <AppRoutes emails={emails} user={currentUser} />
          <Footer />
        </header>
      </div>
    );
  }
}

export default App;
