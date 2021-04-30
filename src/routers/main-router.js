import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../pages/homepage/homepage-component";

const MainRouter = () => (
  <Switch>
    <Route exact path="/" component={HomePage}></Route>
    <Route exact path="/1" component={HomePage}></Route>
    <Route exact path="/2" component={HomePage}></Route>
    <Route exact path="/3" component={HomePage}></Route>
    <Route exact path="/4" component={HomePage}></Route>
    <Route exact path="/5" component={HomePage}></Route>
    <Route exact path="/6" component={HomePage}></Route>
  </Switch>
);

export default MainRouter;
