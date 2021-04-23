import React from "react";
import { connect } from "react-redux";

import action from "../../redux/movie/action";

import Search from "./Search";

const { getMovie } = action;

const Navbar = ({ movie: { search }, getMovie }) => {
  return (
    <div data-testid="navbar">
      <Search
        defaultValue={search}
        onSearch={(value) => getMovie({ search: value, page: 1 })}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movie,
});

const mapDispatchToProps = { getMovie };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
