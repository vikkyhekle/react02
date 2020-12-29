import React from "react";
import GlobalStyle from "./globalStyles";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, NavBar } from "./components";
import Home from "./pages/HomePage/Home"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
