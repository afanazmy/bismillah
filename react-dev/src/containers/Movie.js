import React, { Component } from "react";
import { connect } from "react-redux";

import { MovieContainer } from "./container.style";
import Heading from "../components/typhography/Heading";

import action from "../redux/movie/action";
import MovieList from "../components/MovieList";
import Loading from "../components/ui/Loading";

const { getMovie } = action;

class Movie extends Component {
  state = {};

  componentDidMount = () => {
    this.loadMovie();
  };

  loadMovie = (page = 1, search = "Avengers") => {
    const { getMovie } = this.props;
    getMovie({ page, search });
  };

  render() {
    const { loading } = this.props.movie;
    return (
      <MovieContainer data-testid="movie">
        <Heading>Movies</Heading>
        <Loading loading={loading}>
          <MovieList />
        </Loading>
      </MovieContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = { getMovie };

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
