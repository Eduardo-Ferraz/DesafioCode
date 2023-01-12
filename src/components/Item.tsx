import React from "react";

import { Checkbox, Flex, HStack, Text } from "@chakra-ui/react";

interface ItemProps {
  // propriedadeX: int
  text: String;
}

export default function Item(props: ItemProps) {
  const { text } = props;

  return (
    <Flex w="100%" bg="dark.VDBlue">
      <HStack px="4" py="2" width="50%" spacing="6">
        <Checkbox color="green">{text}</Checkbox>
      </HStack>
    </Flex>
  );
}
