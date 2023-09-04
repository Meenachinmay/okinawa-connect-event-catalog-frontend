import { ChakraBaseProvider } from "@chakra-ui/react";
import CreateEvent from "./pages/CreateEvent.page";
import customTheme from "./chakraUI/theme";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.page";

function App() {
  return (
    <ChakraBaseProvider theme={customTheme}>
      <Routes>
        <Route path="/" element={<CreateEvent />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraBaseProvider>
  );
}

export default App;
