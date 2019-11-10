import React, { Component } from "react";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import profile from "./components/profiles";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route exact path="/" component={Search} />
        <Route exact path="/profiles/:platform/:gamertag" component={profile} />
      </div>
    );
  }
}

export default App;
