import { extendTheme } from "@chakra-ui/react";

import { checkboxTheme as Checkbox } from "./checkBoxCircular";

const theme = extendTheme({
  fonts: {
    body: "Josefin Sans, sans-serif",
    heading: "Josefin Sans, sans-serif",
    mono: "Josefin Sans, sans-serif",
  },
  colors: {
    BrightBlue: "hsl(220, 98%, 61%)",
    CheckBackground:
      "linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
    light: {
      VLGray: "hsl(0, 0%, 98%)",
      VLGrayishBlue: "hsl(236, 33%, 92%)",
      LGrayishBlue: "hsl(233, 11%, 84%)",
      DGrayishBlue: "hsl(236, 9%, 61%)",
      VDGrayishBlue: "hsl(235, 19%, 35%)",
    },
    dark: {
      VDBlue: "hsl(235, 21%, 11%)", // Background
      VDDesaturatedBlue: "hsl(235, 24%, 19%)",
      LGrayishBlue: "hsl(234, 39%, 85%)",
      LGrayishBlueHover: "hsl(236, 33%, 92%)",
      DGrayishBlue: "hsl(234, 11%, 52%)",
      VDGrayishBlue: "hsl(233, 14%, 35%)",
      VDGrayishBlue2: "hsl(237, 14%, 26%)",
    },
  },
  components: {
    Checkbox,
  },
});

export default theme;
