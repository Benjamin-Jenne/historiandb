import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBarContainer from "./Containers/NavBarContainer";
import FooterComponent from "./Components/FooterComponent";
import HomeContainer from "./Containers/HomeContainer";
import SignUpComponent from "./Components/Body/SignUpComponent";
import SignInComponent from "./Components/Body/SignInComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      userFirst: "Doug",
      userLast: "Jones",
    };
  }
  render() {
    return (
      <div>
        <NavBarContainer data={this.state} />
        <Router>
          <Switch>
            <Route path="/signin">
              <SignInComponent />
            </Route>
            <Route path="/signup">
              <SignUpComponent />
            </Route>
            <Route path="/">
              <HomeContainer data={this.state} />
            </Route>
          </Switch>
        </Router>
        <FooterComponent />
      </div>
    );
  }
}
export default App;
