import { ChakraBaseProvider } from "@chakra-ui/react";
import CreateEvent from "./pages/CreateEvent.page";
import customTheme from "./chakraUI/theme";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound.page";
import WelcomePage from "./pages/WelcomePage";
import RegisterPage from "./pages/auth-pages/RegisterPage";
import LoginPage from "./pages/auth-pages/LoginPage";
import Events from "./pages/Events.page";
import TestingZaraDesign from "./pages/TestingZaraDesign";
import Navbar from "./components/navbar-component/Navbar";

function App() {

  return (
    <ChakraBaseProvider theme={customTheme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/create-event" element={<CreateEvent />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/zara-design" element={<TestingZaraDesign />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraBaseProvider>
  );
}

export default App;
