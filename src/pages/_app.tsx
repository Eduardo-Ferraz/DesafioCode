import React from "react";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

const theme = extendTheme({
  fonts: {
    body: "Josefin Sans, sans-serif",
    heading: "Josefin Sans, sans-serif",
    mono: "Josefin Sans, sans-serif",
  },
  colors: {
    highlight: "#FFBA08",
    highlight50: "rgba(255, 186, 8, 0.5)",
    dark: {
      black: "#000000",
      headtext: "#47585B",
      info: "#999999",
      info50: "rgba(153, 153, 153, 0.5)",
    },
    light: {
      white: "#FFFFFF",
      headtext: "#F5F8FA",
      info: "#DADADA",
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
