import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "./theme";
import { Toaster } from "react-hot-toast";
import { GlobalStyle } from "../styles/globals";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />

      <Toaster />
    </ChakraProvider>
  );
}

export default MyApp;
