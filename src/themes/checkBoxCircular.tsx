// TODO: Customizar o checkbox para ficar circular aqui

export const checkboxTheme = {
  baseStyle: {},
  variants: {
    circular: {
      control: {
        borderRadius: "50%",
        _checked: {
          bgGradient: "linear(to-r, #2acfcf, #2acfcf)",
        },
        boxSize: "1.5rem",
        _hover: {
          bg: "light.LGrayishBlueHover",
        },
      },
    },
  },
  sizes: {},
  defaultProps: {},
};
