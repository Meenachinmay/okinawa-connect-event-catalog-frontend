import { Flex, Input, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil'
import { authUIState } from '../../atoms/auth-ui-state'

const ResetPassword: React.FunctionComponent = () => {
  const [authViewState, setAuthUIState] = useRecoilState(authUIState)

  return (
    <>
      <Flex
        width={'full'}
        height={'400px'}
        bg={'white'}
        flexDirection={'column'}
        borderRadius={'10px'}
        padding={'40px'}
      >
        <Text
          color={'gray.800'}
          fontFamily={'Rajdhani'}
          fontSize={'2.5em'}
          fontWeight={'bold'}
        >
          Reset Password
        </Text>
        <Flex flexDir={'column'} gap={'20px'} width={'auto'}>
          <Input
            placeholder="Email"
            borderRadius={'0px'}
            type="email"
            required={true}
            _focus={{ outline: 'none', border: '0px' }}
          />
          <Input
            placeholder="Password"
            borderRadius={'0px'}
            color={'white'}
            type="password"
            required={true}
            _focus={{ outline: 'none', border: '0px' }}
          />
          <Button
            fontFamily={'Rajdhani'}
            bg={'orange.500'}
            _hover={{ bg: 'orange.600' }}
            borderRadius={'0px'}
            color={'white'}
            fontWeight={'bold'}
            fontSize={'20px'}
          >
            LOGIN
          </Button>
          <Flex flexDirection={'column'}>
            <Text
              fontSize={'sm'}
              fontWeight={'bold'}
              fontFamily={'Rajdhani'}
              _hover={{ color: 'blue.800', textDecoration: 'underline' }}
              cursor={'pointer'}
              onClick={() =>
                setAuthUIState(prev => ({
                  ...prev,
                  view: 'signup',
                }))
              }
            >
              You are not registerd?
            </Text>
            <Text
              fontSize={'xs'}
              fontWeight={'bold'}
              fontFamily={'Rajdhani'}
              _hover={{ color: 'red.800', textDecoration: 'underline' }}
              cursor={'pointer'}
              onClick={() =>
                setAuthUIState(prev => ({
                  ...prev,
                  view: 'resetPassword',
                }))
              }
            >
              Reset password!
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default ResetPassword;