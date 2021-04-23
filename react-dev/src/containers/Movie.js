import React, { Component } from "react";
import { connect } from "react-redux";

import { MovieContainer } from "./container.style";
import Heading from "../components/typhography/Heading";

import action from "../redux/movie/action";
import MovieList from "../components/MovieList";
import Loading from "../components/ui/Loading";
import { debounce } from "../lib/helper";

const { getMovies } = action;

class Movie extends Component {
  scrollY = window.scrollY;

  componentDidMount = () => {
    this.loadMovie();

    window.addEventListener("scroll", (e) => debounce(this.handleScroll, 500));
  };

  loadMovie = (page = 1, search = "Avengers") => {
    const { getMovies } = this.props;
    const { loading } = this.props.movie;
    if (!loading) {
      getMovies({ page, search });
    }
  };

  handleScroll = () => {
    const { page, lastPage, search } = this.props.movie;
    const isScrollDown = this.scrollY < window.scrollY;
    if (isScrollDown && page < lastPage) {
      this.loadMovie(page + 1, search);
    }
    this.scrollY = window.scrollY;
  };

  render() {
    const { loading } = this.props.movie;
    return (
      <MovieContainer data-testid="movie">
        <Heading>Movies</Heading>
        <MovieList />
        <Loading loading={loading} style={{ marginTop: 12 }} />
      </MovieContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = { getMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
