import { Flex, Spacer, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WorldTrip</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/airplane.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <Flex direction='column' h="100vh" justifyContent="center" alignItems="center">
        <Flex width={'50%'} bg='red'>
          <Text>TODO</Text>
          <Spacer />
          <Text>*Icone*</Text>
        </Flex>
        <Flex>
          <Text>Comprar Pão</Text>
        </Flex>
        <Flex>
          <img></img>
          <Text>Comprar Pão</Text>
        </Flex>
      </Flex>
    </div>
  );
};

export default Home;


