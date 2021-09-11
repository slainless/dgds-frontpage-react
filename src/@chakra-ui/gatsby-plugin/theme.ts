import { extendTheme } from "@chakra-ui/react"

import Button from "./components/button"
import Heading from "./components/heading"

import colors from './colors'

const theme = {
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    monospace: "Space Mono, monospace"
  },
  colors,
  components: {
    Button,
    Heading
  }
}

export default extendTheme(theme)