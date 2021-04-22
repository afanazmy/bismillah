import React from "react";
import { connect } from "react-redux";

import { MovieListContainer } from "./component.style";
import MovieCard from "./MovieCard";

const MovieList = ({ movie: { movies } }) => {
  return (
    <MovieListContainer data-testid="movie-list">
      {movies.map((mov, key) => (
        <MovieCard key={key} {...mov} />
      ))}
    </MovieListContainer>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

export default connect(mapStateToProps)(MovieList);
