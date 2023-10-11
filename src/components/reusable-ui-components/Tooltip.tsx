// A component for putting Tooltip around a child element

import { motion } from 'framer-motion'
import React from 'react'

import '../../App.css'

interface ITooltipProps {
  children: React.ReactNode
  _string: string
}

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
      duration: 1, // This will make the animation take 1 second.
    },
  },
}

const Tooltip: React.FC<ITooltipProps> = ({
  children,
  _string,
}: ITooltipProps) => {
  return (
    <>
      {' '}
      <div className="tooltip-wrapper">
        {children}
      <div className="tooltip-content">{_string}</div>
      </div>
    </>
  )
}

export default Tooltip
