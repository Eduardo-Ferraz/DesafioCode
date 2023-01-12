import {
  Flex,
  Spacer,
  Text,
  Image,
  HStack,
  VStack,
  Input,
  StackDivider,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";

import Item from "../components/Item";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ToDo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Flex
        bg="aliceblue"
        w="100%"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Flex direction="column" w="100%" alignItems="center">
          {/* Header */}
          <Flex py="20" width="50%" justifyContent="center" bg="green">
            <Text fontSize="36px" as="b" color="dark.LGrayishBlue">
              T O D O
            </Text>
            <Spacer />
            <Image boxSize="32px" src="/icon-sun.svg" alt="icone de sol" />
          </Flex>

          {/* Buttom input */}
          <HStack my="4" px="4" py="2" width="50%" spacing="6" bg="red">
            <img src="/icon-check.svg" alt="Icone Check" />
            <Input
              color="dark.LGrayishBlue"
              bg=""
              placeholder="Create a new todo..."
            />
          </HStack>

          {/* Items list */}
          <CheckboxGroup colorScheme="blackAlpha">
            <VStack
              w="50%"
              divider={<StackDivider borderColor="dark.DGrayishBlue" />}
              spacing="0"
            >
              <Item text="Texto 1" />
              <Item text="Texto 2" />
              <Item text="Textoooooo" />
            </VStack>
          </CheckboxGroup>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
