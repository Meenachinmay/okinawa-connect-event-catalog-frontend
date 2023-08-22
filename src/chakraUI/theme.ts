// theme.js
import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  colors: {
    primary: {
      50: "#f7fafc",
      // ... add other shades
    },
    // Add more color customizations
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    // Add more font customizations
  },
  // Add more theme customizations
});

export default customTheme;