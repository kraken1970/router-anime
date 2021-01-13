import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RouteAnimation from "./RouteAnimation";

function App() {
  return (
    <Router>
      <Header />

      <Route
        render={({ location }) => <RouteAnimation location={location} />}
      />

      <Footer />
    </Router>
  );
}

export default App;
