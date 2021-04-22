import React, { Component } from "react";
import { connect } from "react-redux";

import { MovieContainer } from "./container.style";
import Heading from "../components/typhography/Heading";

import action from "../redux/movie/action";
import MovieList from "../components/MovieList";

const { getMovie } = action;

class Movie extends Component {
  state = {};

  componentDidMount = () => {
    const { getMovie } = this.props;
    getMovie({ page: 1, search: "Avengers" });
  };

  render() {
    return (
      <MovieContainer data-testid="movie">
        <Heading>Movies</Heading>
        <MovieList />
      </MovieContainer>
    );
  }
}

const mapDispatchToProps = { getMovie };

export default connect(null, mapDispatchToProps)(Movie);
