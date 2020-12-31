import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Raidcalendar from "./Raidcalendar";
import ilmoittautumiset from "./ilmoittautumiset";
import Contact from "./Contact";


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>häröpallo</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Raidcalendar">Eventcalendar</NavLink></li>
            <li><NavLink to="/ilmoittautumiset">ilmoittautumiset</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Raidcalendar" component={Raidcalendar}/>
            <Route path="/ilmoittautumiset" component={ilmoittautumiset}/>
            <Route path="/contact" component={Contact}/>
</div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;