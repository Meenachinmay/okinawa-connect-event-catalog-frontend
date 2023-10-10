import { Flex, Text, Box, Input, Button, Image } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

// import welcome-page.css
import '../pages/welcome-page.css'
import { useRecoilState } from 'recoil'
import { authUIState } from '../atoms/auth-ui-state'
import Login from '../components/auth-components/Login'
import Register from '../components/auth-components/Register'
import ResetPassword from '../components/auth-components/ResetPassword'

// define the animation variants
const fadeInUpwards = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7, // This will make the animation take 1 second.
    },
  },
}

const WelcomePage = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fullTextLines = [
    'A platform to help people from main land to engage in business opportunities',
    'in okinawa. And we will also help to local people to engage in various services',
    'in okinawa to use and enjoy them more like Events, Car-Rental etc.',
  ]

  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [authViewState, setAuthUIState] = useRecoilState(authUIState)

  useEffect(() => {
    const currentLine = fullTextLines[lineIndex]

    if (!currentLine) return

    if (charIndex < currentLine.length) {
      setTimeout(() => {
        setCharIndex(charIndex + 1)
      }, 50)
    } else if (lineIndex < fullTextLines.length - 1) {
      setLineIndex(lineIndex + 1)
      setCharIndex(0)
    }
  }, [charIndex, lineIndex, fullTextLines])

  return (
    <>
      <Flex width={'full'} height={'100vh'} bg={'gray.800'}>
        <Flex
          width={'50%'}
          height={'full'}
          className="welcome_page_left_side"
          padding={'20px'}
          alignItems={'center'}
          justifyContent={'center'}
          boxShadow={'lg'}
          shadow={'lg'}
          flexDirection={'column'}
        >
          <Flex
            flexDir={'column'}
            width={'full'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Flex
              width={'full'}
              flexDir={'column'}
              alignItems={'start'}
              justifyContent={'center'}
            >
              <Text
                initial="hidden"
                animate="visible"
                variants={fadeInUpwards}
                fontFamily={'Rajdhani'}
                fontSize={'7xl'}
                fontWeight={'extrabold'}
                color={'white'}
                as={motion.div}
              >
                Okinawa Connect
              </Text>
              <Box
                minHeight={'4em'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <Text
                  fontFamily={'Raleway'}
                  fontSize={'md'}
                  fontWeight={'semibold'}
                  noOfLines={[1, 2, 3]}
                  color={'gray.200'}
                >
                  {fullTextLines.slice(0, lineIndex).map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                  {fullTextLines[lineIndex].slice(0, charIndex)}
                  <span>|</span>
                </Text>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        {/* right side page */}
        <Flex position={'relative'} width={'50%'} height={'full'}>
          <Flex
            alignItems={'center'}
            justifyContent={'center'}
            position="absolute"
            top={0}
            left={0}
            width={'100%'}
            height={'100%'}
            flexDirection={'column'}
            zIndex={2}
            padding={'80px'}
          >
            <div className="container">
              <Image
                src="/favicon.svg"
                width={'200px'}
                height={'200px'}
                marginBottom={'20px'}
                className="spin-animation"
              />
            </div>
            {authViewState.view === 'login' ? (
              <Login />
            ) : authViewState.view === 'resetPassword' ? (
              <ResetPassword />
            ) : authViewState.view === 'signup' ? (
              <Register />
            ) : null}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default WelcomePage
