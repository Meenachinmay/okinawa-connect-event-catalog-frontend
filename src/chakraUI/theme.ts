// theme.js
import { extendTheme } from "@chakra-ui/react";
import '@fontsource/rajdhani'
import '@fontsource/raleway'

const customTheme = extendTheme({
  colors: {
    primary: {
      50: '#f7fafc',
      // ... add other shades
    },
    // Add more color customizations
  },
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
    welcomeTitle: `'Rajdhani', sans-serif`,
    // Add more font customizations
  },
  // Add more theme customizations
})

export default customTheme;