import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MonstersList from "./Components/MonstersList.js";
import Monster from "./Components/Monster.js";
import Admin from "./Components/Admin.js";
import AddMonster from "./Components/AddMonster.js";
import DeleteMonster from "./Components/DeleteMonster.js";
import ShowLocations from "./Components/ShowLocations.js";
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
              <Route exact path="/admin">
                <Admin />
              </Route>
              <Route exact path="/admin/add-monster">
                <AddMonster />
              </Route>
              <Route
                path="/admin/add-locations/:monsterName"
                component={ShowLocations}
              />
              <Route exact path="/admin/delete-monster">
                <DeleteMonster />
              </Route>
            </Switch>
          </Router>
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
