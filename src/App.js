import React, { useEffect, useState } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import axios from "axios";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [emails, setEmails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getEmails = () => {
    axios.get("/api/emails").then((res) => setEmails(res.data));
  };
  useEffect(() => {
    setTimeout(() => {
      getEmails();
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='App'>
      <Header user={currentUser} />
      <AppRoutes emails={emails} user={currentUser} setUser={setCurrentUser} />
      <Footer />
    </div>
  );
};

export default App;
