import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";

// import { history } from "../../redux/store";

import action from "../../redux/movie/action";

import Search from "./Search";

const { getMovies } = action;

const Navbar = ({ movie: { search }, getMovies }) => {
  const history = useHistory();

  return (
    <div data-testid="navbar">
      <Search
        defaultValue={search}
        onSearch={(value) => {
          getMovies({ search: value, page: 1 });
          return history.push("/");
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = { getMovies };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
