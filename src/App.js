import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MonstersList from "./Components/MonstersList.js";
import Monster from "./Components/Monster.js";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="app">
          <Router>
            <Switch>
              <Route exact path="/">
                <MonstersList />
              </Route>
              <Route path="/monster/:monsterId" component={Monster} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
