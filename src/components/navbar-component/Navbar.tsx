import React, { useState } from 'react'
import { Flex, Text, Image } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'

//import scss file here
import './navbar.css'

const Navbar: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  return (
    <>
      <Flex
        width={'full'}
        height={'70px'}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Flex
          width={'full'}
          height={'full'}
          alignItems={'center'}
          justifyContent={'start'}
          padding={'5px'}
          gap={'2'}
        >
          <Text
            onClick={() => navigate('/')}
            cursor={'pointer'}
            fontSize={'28px'}
            marginLeft={'10px'}
            color={'gray.800'}
          >
            Okinawa Connect
          </Text>
          <Image src="/favicon.svg" width={'50px'} height={'50px'}></Image>
        </Flex>
        <Flex
          width={'full'}
          height={'full'}
          padding={'5px'}
          justifyContent={'center'}
        >
          <Flex
            width={'full'}
            padding={'5px'}
            alignItems={'center'}
            justifyContent={'center'}
            gap={'50px'}
          >
            <Text
              bg={'orange.500'}
              padding={'8px'}
              color={'gray.100'}
              _hover={{ bg: 'orange.600' }}
              cursor={'pointer'}
            >
              Events
            </Text>
            <Text
              bg={'orange.500'}
              padding={'8px'}
              color={'gray.100'}
              _hover={{ bg: 'orange.600' }}
              cursor={'pointer'}
            >
              Saved Events
            </Text>
          </Flex>
        </Flex>
        <Flex width={'full'} height={'full'} padding={'5px'}>
          {loggedIn && (
            <Flex
              width={'full'}
              padding={'5px'}
              alignItems={'center'}
              justifyContent={'end'}
              gap={'10px'}
            >
              <Text
                bg={'orange.500'}
                cursor={'pointer'}
                _hover={{ bg: 'orange.600' }}
                padding={'8px'}
                color={'gray.100'}
              >
                Login
              </Text>
              <Text
                bg={'orange.500'}
                cursor={'pointer'}
                _hover={{ bg: 'orange.600' }}
                padding={'8px'}
                color={'gray.100'}
              >
                Register
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
    </>
  )
}

export default Navbar
