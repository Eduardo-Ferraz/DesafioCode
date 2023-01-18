import React from "react";

import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonPersoProps extends ButtonProps {
  text: String;
}

export default function ButtonPerso({ text, ...rest }: ButtonPersoProps) {
  return (
    <Button
      bg=""
      color="white"
      _hover={{
        background: "dark.VDGrayishBlue",
      }}
      {...rest}
    >
      {text}
    </Button>
  );
}
