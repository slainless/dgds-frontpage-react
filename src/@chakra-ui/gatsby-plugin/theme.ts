import { ChakraTheme, extendTheme } from "@chakra-ui/react"

import Button from "./components/button"
import Heading from "./components/heading"

import colors from './colors'
import textStyles from "./text-style"

const theme: Partial<ChakraTheme> = {
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    monospace: "Space Mono, monospace"
  },
  colors,
  components: {
    Button,
    Heading
  },
  textStyles
}

export default extendTheme(theme)