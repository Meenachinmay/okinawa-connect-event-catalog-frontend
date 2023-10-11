import React from 'react'
import { Flex, Box, Portal } from '@chakra-ui/react'
import '../../App.css' // import our custom css for the blur effect

interface ModelProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Model: React.FC<ModelProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <Portal>
      <Flex
        position="fixed"
        top="0"
        right="0"
        bottom="0"
        left="0"
        justifyContent="center"
        alignItems="center"
        className={`model-overlay`}
        onClick={onClose}
      >
        <Flex
          justifyContent={'center'}
          bg="white"
          width={'600px'}
          height={'400px'}
          p={5}
          borderRadius="md"
          boxShadow="xl"
          onClick={e => e.stopPropagation()} // to prevent modal close when clicking inside
          opacity={1}
        >
          {children}
        </Flex>
      </Flex>
    </Portal>
  )
}

export default Model
