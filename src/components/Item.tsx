import React from "react";

import { Flex, HStack, Text } from "@chakra-ui/react";

interface ItemProps {
  // propriedadeX: int
  text: string;
}

export default function Item(props: ItemProps) {
  const { text } = props;

  return (
    <Flex w="100%" bg="dark.VDBlue">
      <HStack px="4" py="2" width="50%" spacing="6">
        <img src="/icon-check.svg" alt="Icone Check" />
        <Text color="white">{text}</Text>
      </HStack>
    </Flex>
  );
}
