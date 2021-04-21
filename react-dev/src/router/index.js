import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Movie from "../containers/Movie";

const Router = ({ history }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact history={history} path="/" component={Movie} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
