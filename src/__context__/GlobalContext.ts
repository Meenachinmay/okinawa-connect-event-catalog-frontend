import React from 'react'

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index: number) => {},
  eventModel: false,
  setEventModel: (open: boolean) => {},
})

export default GlobalContext
