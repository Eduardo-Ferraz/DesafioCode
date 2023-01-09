import { Flex } from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <p>Este é o template de React para CT Junior, criado em 2022</p>
    </Flex>
  );
};

export default Home;
