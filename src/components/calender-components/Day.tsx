import { Flex, Icon, Text, Tooltip } from '@chakra-ui/react'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

import { AiFillSave } from 'react-icons/ai'
import { FcLike, FcViewDetails } from 'react-icons/fc'

import '../../App.css'
import { IDay } from '../../types/day.type'
import Model from '../ui-models/EventModel'

const Day: React.FC<IDay> = ({ day, events }: IDay) => {
  const [dayColor, setDayColor] = useState<string>('gray.100')
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false)

  function getCurrentDayClass() {
    return day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
  }

  useEffect(() => {
    // If the day has events and it's also today's date
    if (
      events?.length &&
      day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
    ) {
      setDayColor('orange.300')
      return // early exit from the useEffect
    }

    // If the day has events
    if (events?.length) {
      setDayColor('orange.100')
      return // early exit from the useEffect
    }

    // If it's today's date
    if (day.format('DD-MM-YY') === dayjs().format('DD-MM-YY')) {
      setDayColor('orange.300')
      return // early exit from the useEffect
    }

    // Fall back to original color
    // You can also handle any other default or fallback colors if required.
    setDayColor('gray.100')
  }, [day, events])

  return (
    <>
      <Flex
        width={'full'}
        height={'100px'}
        className="day_card"
        //   bg={getCurrentDayClass() ? "orange.300" : 'gray.100'}
        bg={dayColor}
        border={'1px solid'}
        borderColor={'gray.100'}
        borderRadius={'5px'}
        flexDir={'column'}
        p={1}
        my={1}
        _hover={{
          // bg: getCurrentDayClass() ? "orange.300" : "gray.100",
          bg: dayColor,
          boxShadow: 'xl',
          borderBottom: '2px solid',
          borderBottomColor: 'orange.500',
        }}
        cursor={'pointer'}
        onClick={() => setIsModelOpen(true)}
      >
        <Flex
          flexDir={'column'}
          alignItems={'center'}
          color={getCurrentDayClass() ? 'white' : 'gray.800'}
          fontWeight={getCurrentDayClass() ? 'bold' : 'normal'}
        >
          <Text fontSize={'sm'}>{day.format('ddd').toUpperCase()}</Text>
          <Text fontSize={'sm'}>{day.format('DD')}</Text>
        </Flex>
        <Flex width={'full'} maxWidth={'full'} gap={1} wrap={'wrap'}>
          {events?.map(e => <div className="events_dots" key={e.id}></div>)}
        </Flex>
      </Flex>
      <Model isOpen={isModelOpen} onClose={() => setIsModelOpen(false)}>
        <Flex flexDir={'column'} width={'full'} height={'full'}>
          <h1>Your Content Here</h1>
          <p>{day.format('DD')}</p>
          <Flex
            width={'full'}
            maxWidth={'full'}
            height={'100%'}
            gap={1}
            wrap={'wrap'}
          >
            {events?.map(e => (
              <Flex>
                <div className="events_dots" key={e.id}></div>
                <div>{e.title}</div>
              </Flex>
            ))}
          </Flex>
          <Flex
            alignItems={'center'}
            justifyContent={'space-around'}
            gap={5}
            padding={'5px'}
            borderRadius={'10px'}
            flexGrow={1}
          >
            <Tooltip _string="Like event">
              <Icon as={FcLike} w={'40px'} h={'40px'} cursor={'pointer'}></Icon>
            </Tooltip>
            <Tooltip _string="See details">
              <Icon
                as={FcViewDetails}
                w={'40px'}
                h={'40px'}
                cursor={'pointer'}
              ></Icon>
            </Tooltip>
            <Tooltip _string="Save event">
              <Icon
                as={AiFillSave}
                color={'green.500'}
                w={'40px'}
                h={'40px'}
                cursor={'pointer'}
              ></Icon>
            </Tooltip>
          </Flex>
        </Flex>
      </Model>
    </>
  )
}

export default Day
