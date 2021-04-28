import React from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'

const outerCircleVariants: Variants = {
  circle: {
    transform: 'scale(1)',
    opacity: 0.5,
    boxShadow: '0px 0px 0px 10px #FF214D',
  },
  largeCircle: {
    transform: 'scale(1.75)',
    opacity: 1,
    boxShadow: '0px 0px 0px 10px #FF214D',
  },
  pulseIn: {
    transform: 'scale(1.75)',
    opacity: 1,
    boxShadow: '0px 0px 0px 15px #FF214D',
  },
  pulseOut: {
    transform: 'scale(1.75)',
    opacity: 1,
    boxShadow: '0px 0px 0px 10px #FF214D',
  },
}
const innerCircleVariants: Variants = {
  circle: {
    transform: 'scale(1)',
    borderRadius: '100%',
  },
  square: {
    transform: 'scale(0.75)',
    borderRadius: '20%',
  },
  invisible: {
    transform: 'scale(0)',
    borderRadius: '100%',
  },
}

const RecordButton: React.FC = () => {
  const [hover, setHover] = React.useState<boolean>(false)
  const innerCircleAnimation = useAnimation()
  const outerCircleAnimation = useAnimation()

  React.useEffect(() => {
    void (async () => {
      if (hover) {
        await innerCircleAnimation.start('square')
        await innerCircleAnimation.start('invisible')
      } else {
        await innerCircleAnimation.start('circle')
      }
    })()
  }, [hover])
  React.useEffect(() => {
    void (async () => {
      if (hover) {
        await outerCircleAnimation.start('largeCircle')
        await outerCircleAnimation.start(['pulseOut', 'pulseIn'], {
          repeat: Infinity,
          repeatType: 'mirror',
        })
      } else {
        await outerCircleAnimation.start('circle')
      }
    })()
  }, [hover])

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative flex justify-center items-center w-full h-full"
    >
      <motion.div
        animate={outerCircleAnimation}
        variants={outerCircleVariants}
        className="absolute overflow-hidden w-full h-full rounded-full"
      />
      <motion.div
        animate={innerCircleAnimation}
        variants={innerCircleVariants}
        className="absolute overflow-hidden bg-primary h-5/6 w-5/6"
      />
    </div>
  )
}

export default RecordButton
