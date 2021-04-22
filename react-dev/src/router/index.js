import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Movie from "../containers/Movie";

export const routes = [
  {
    name: "Movies",
    path: "/",
    exact: true,
    component: Movie,
  },
];

const Router = ({ history }) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ name, ...restProps }) => (
          <Route key={name} name={name} history={history} {...restProps} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
