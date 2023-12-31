import { ChakraProvider } from '@chakra-ui/react'
import CreateEvent from './pages/CreateEvent.page'
import customTheme from './chakraUI/theme'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound.page'
import WelcomePage from './pages/WelcomePage'
import Events from './pages/Events.page'
import TestingZaraDesign from './pages/TestingZaraDesign'
import Navbar from './components/navbar-component/Navbar'

import { useLocation } from 'react-router-dom'
import Calender from './components/calender-components/Calender'

import '../src/App.css'
import { RecoilRoot } from 'recoil'
import ContextWrapper from './__context__/ContextWrapper'

function App() {
  const location = useLocation()
  const noNavbarRoutes = ['/', '*']
  return (
    <ChakraProvider theme={customTheme}>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <RecoilRoot>
        <ContextWrapper>
          <Routes>
            <Route path="/" element={<WelcomePage />}></Route>
            <Route path="/create-event" element={<CreateEvent />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/zara-design" element={<TestingZaraDesign />}></Route>
            <Route path="/calender-events" element={<Calender />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContextWrapper>
      </RecoilRoot>
    </ChakraProvider>
  )
}

export default App
