import React from "react";

import { Text } from "@chakra-ui/react";

interface ItemProps {
  bg: string;
  // propriedadeX: int
  text: string;
}

export default function Item(props: ItemProps) {
  const { text } = props;
  const { bg } = props;
  return (
    <>
      <Text bg={bg}>{text}</Text>
      <Text>{text}</Text>
    </>
  );
}
