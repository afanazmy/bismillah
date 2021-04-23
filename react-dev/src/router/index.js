import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "../components/ui/Navbar";
import Movie from "../containers/Movie";
import MovieDetail from "../containers/MovieDetail";

export const routes = [
  {
    name: "Movies",
    path: "/",
    exact: true,
    component: Movie,
  },
  {
    name: "Movie Detail",
    path: "/movie/:id",
    exact: true,
    component: MovieDetail,
  },
];

const Router = ({ history }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {routes.map(({ name, ...restProps }) => (
          <Route key={name} name={name} history={history} {...restProps} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
