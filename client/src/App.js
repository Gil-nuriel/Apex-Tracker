import React, { Fragment, Component } from "react";
import { Route } from "react-router-dom";
import Search from "./components/Search";
import profile from "./components/profiles";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Search} />
        <Route exact path="/profiles/:platform/:gamertag" component={profile} />
      </Fragment>
    );
  }
}

export default App;
