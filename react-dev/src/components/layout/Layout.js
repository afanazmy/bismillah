import React from "react";

import Navbar from "../ui/Navbar";
import { Container } from "./layout.style";

const Layout = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
