import React from "react";

import Search from "./Search";

const Navbar = () => {
  return (
    <div data-testid="navbar">
      <Search onSearch={(value) => console.log(value)} />
    </div>
  );
};

export default Navbar;
