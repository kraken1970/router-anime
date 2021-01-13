import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RouteAnimation from "./RouteAnimation";

const Comp = ({ children }) => {
  const isLoggedIn = true;

  return <div>{children(isLoggedIn)}</div>;
};

function App() {
  return (
    <Router>
      <Header />

      <Comp>{(isLoggedIn) => (isLoggedIn ? "" : "Sign Up")}</Comp>

      <Route
        render={({ location }) => <RouteAnimation location={location} />}
      />

      <Footer />
    </Router>
  );
}

export default App;
