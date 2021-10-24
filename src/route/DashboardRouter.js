import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import {Casa} from "../components/home/Casa"


export const DashboardRouter = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Casa} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};
