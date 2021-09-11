import type { CSSObject } from "@chakra-ui/styled-system";
import type { StyleConfig } from "@chakra-ui/theme-tools";

const altStyles: CSSObject = {
  bgColor: "alt.400",
  color: "white",
  _hover: {
    bgColor: "alt.100",
    color: "alt.400",
  },
  _active: {
    bgColor: "alt.50",
  }
}

const brandStyles: CSSObject = {
  bgColor: 'brand.600', 
  color: 'white',
  _hover: {
    bgColor: 'brand.300',
    color: 'brand.700',
  },
  _active: {
    bgColor: 'brand.200',
  }
}

const roundedStyles: CSSObject = {
  px: 7,
  rounded: 'full'
}

const Button: StyleConfig = {
  variants: {
    'brand': brandStyles,
    'brand-rounded': { ...brandStyles, ...roundedStyles },
    'brand-outlined': {
      ...brandStyles,
      bgColor: "transparent", 
      color: "black",
      border: "1px solid",
      borderColor: "black",
      _hover: {
        ...brandStyles._hover as CSSObject,
        borderColor: "brand.500"
      }
    },
    'alt': altStyles,
    'alt-rounded': { ...altStyles, ...roundedStyles },
    'blended': {
      fontWeight: 'medium',
      bgColor: 'transparent', 
      color: 'black',
      _hover: {
        bgColor: "white",
      },
      _active: {
        bgColor: "brand.200",
        color: "brand.500"
      }
    }
  }
}

export default Button