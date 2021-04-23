import React from "react";

import { Container } from "./layout.style";

const Layout = ({ children, ...restProps }) => {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  );
};

export default Layout;
