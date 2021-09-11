import { extendTheme } from "@chakra-ui/react"

import colors from './colors'

const theme = {
  fonts: {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
    monospace: "Space Mono, monospace"
  },
  colors,
}

export default extendTheme(theme)