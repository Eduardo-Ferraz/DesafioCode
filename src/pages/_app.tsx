import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import theme from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <title>TODO</title>

      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
