import React from "react";

import {
  Box,
  Button,
  Checkbox,
  CheckboxProps,
  Circle,
  Flex,
  HStack,
  Img,
  Text,
} from "@chakra-ui/react";

interface ItemProps extends CheckboxProps {
  // propriedadeX: int
  text: String;
  isChecked: boolean;
  removeItem: (id: number) => void;
}

export default function Item({
  text,
  isChecked,
  removeItem,
  ...rest
}: ItemProps) {
  const { id } = rest;
  return (
    <HStack
      px="1rem"
      py="0.9rem"
      width="100%"
      bg="dark.VDDesaturatedBlue"
      borderRadius="4px"
      alignItems="center"
      justifyContent="space-between"
      id={id}
    >
      <Checkbox
        {...rest}
        color="light.LGrayishBlue"
        iconColor="light.LGrayishBlue"
        size="md"
        fontSize="large"
        icon={
          <Img
            src="/images/icon-check.svg"
            bgGradient="linear(to bottom right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
            width="29px"
          />
        }
      >
        {text}
      </Checkbox>
      <Button
        onClick={() => removeItem(Number(id))}
        bgColor="transparent"
        variant="unstyled"
      >
        <Img src="/images/icon-cross.svg" alt="Delete" title="Delete" />
      </Button>
    </HStack>
  );
}
