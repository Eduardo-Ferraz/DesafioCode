import React from "react";

import { Checkbox, CheckboxProps, Flex } from "@chakra-ui/react";

interface ItemProps extends CheckboxProps {
  text: String;
}

export default function Item({ text, ...rest }: ItemProps) {
  return (
    <Flex w="100%">
      <Checkbox
        w="100%"
        marginColor="red"
        px="4"
        py="4"
        bg="dark.VDGrayishBlue2"
        color="dark.LGrayishBlue"
        marginBottom="1px"
        borderRadius="4"
        {...rest}
      >
        {text}
      </Checkbox>
    </Flex>
  );
}
