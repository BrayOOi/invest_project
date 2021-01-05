import React from "react";
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";
import LandingPage from "./container/home/LandingPage";
import NavBar from "./presentation/NavBar";

const RootRoute = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        {/* <PrivateRoute isLoggedIn={isLoggedIn} path="/private">
          <ProtectedPages />
        </PrivateRoute> */}
      </Switch>
    </Router>
  );
};

export default RootRoute;
