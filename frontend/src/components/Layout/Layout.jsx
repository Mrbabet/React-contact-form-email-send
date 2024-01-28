import { Container } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }) => {
  return (
    <Container textAlign="center" fontSize="2xl" p="1em">
      {children}
    </Container>
  );
};

export default Layout;
