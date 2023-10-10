import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import '../App.css'
import {
  useTransition,
  animated,
  AnimatedProps,
  useSpringRef,
} from '@react-spring/web'

import styles from '../pages/styles.module.css'

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>,
) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style, background: 'lightgreen' }}>
      C
    </animated.div>
  ),
]

const TestingZaraDesign: React.FunctionComponent = () => {
  const images = [
    '/images/zara-image1.jpg',
    '/images/zara-image2.jpg',
    // ... more images
  ]

  const initialRenderRef = useRef(null)

  const [index, set] = useState(0)
  const onClick = () => set(state => (state + 1) % images.length)
  const transRef = useSpringRef()

  const transitions = useTransition(index, {
    ref: transRef,
    keys: null,
    from: initialRenderRef.current
      ? { opacity: 1, transform: 'translate3d(100%,0,0)' }
      : { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })

  useEffect(() => {
    transRef.start()
    initialRenderRef.current = null;
  }, [index])

  return (
    <div
      className={`flex fill ${styles.container}`}
      onClick={onClick}
      style={{ backgroundColor: '#2c2c2c' }}
    >
      {/* {transitions((style, i) => {
        const Page = pages[i]
        return <Page style={style} />
      })} */}
      {transitions((style, i) => (
        <animated.div
          style={{
            ...style,
            backgroundImage: `url(${images[i]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      ))}
    </div>
  )
}

export default TestingZaraDesign
