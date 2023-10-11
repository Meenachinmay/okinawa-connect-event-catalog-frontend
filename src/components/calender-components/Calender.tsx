import { Flex } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'

import GlobalContext from '../../__context__/GlobalContext'
import { events } from '../../data-arrays/event.index'
import { IEvent } from '../../types/event.type'
import { getMonth, processEventsIntoDateStructure } from '../../utils/calender-utils'
import CalenderHeader from './CalenderHeader'
import Month from './Month'


const Calender: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const [eventsByDate, setEventsByDate] = useState<{
    [date: string]: IEvent[]
  }>({})
  const { monthIndex } = useContext(GlobalContext)

  // set month and fetch events
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
    const processedEvents = processEventsIntoDateStructure(events)
    setEventsByDate(processedEvents)
  }, [monthIndex])

  return (
    <>
      <Flex
        width={'full'}
        gap={'1'}
        height={'100vh'}
        flexDir={'column'}
        padding={'50px'}
      >
        <CalenderHeader />
        <Flex width={'100%'} gap={'5'}>
          <Month month={currentMonth} eventsByDate={eventsByDate} />
        </Flex>
      </Flex>
    </>
  )
}

export default Calender
