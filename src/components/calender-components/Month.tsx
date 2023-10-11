import { Flex, Grid } from '@chakra-ui/react'
import dayjs from 'dayjs'
import React from 'react'
import { IEvent } from '../../types/event.type'
import Day from './Day'

interface MonthProps {
  month: dayjs.Dayjs[][]
  eventsByDate: { [date: string]: IEvent[] }
}

const Month: React.FC<MonthProps> = ({ month, eventsByDate }) => {
  return (
    <>
      <Flex width={'full'}>
        <Grid templateColumns="repeat(7, 1fr)" gap={1} width={'full'}>
          {month.map((row, i) => (
            <React.Fragment key={i}>
              {row.map((day, index) => (
                <Day
                  day={day}
                  key={index}
                  events={eventsByDate[day.format('DD-MM-YYYY')]}
                />
              ))}
            </React.Fragment>
          ))}
        </Grid>
      </Flex>
    </>
  )
}

export default Month
