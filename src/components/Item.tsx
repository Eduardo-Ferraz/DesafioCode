import React from "react";

import { Checkbox, CheckboxProps, Flex, HStack, Text } from "@chakra-ui/react";

interface ItemProps extends CheckboxProps {
  // propriedadeX: int
  text: String;
}

export default function Item({ text, ...rest }: ItemProps) {
  return (
    <Flex w="100%" bg="dark.VDBlue">
      <HStack px="4" py="2" width="50%" spacing="6">
        <Checkbox {...rest} color="green">
          {text}
        </Checkbox>
      </HStack>
    </Flex>
  );
}
