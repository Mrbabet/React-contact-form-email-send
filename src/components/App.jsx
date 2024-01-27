import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./Layout/Layout";
import theme from "../config/theme";
import Home from "../pages/Home";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Home />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default App;
