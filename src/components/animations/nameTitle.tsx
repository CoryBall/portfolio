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

const NameTitle: React.FC = () => {
  const [hover, setHover] = React.useState<boolean>(false)
  const outerCircleAnimation = useAnimation()

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
      className="flex justify-center items-center h-24 w-48 text-center text-8xl"
    >
      <motion.div
        animate={outerCircleAnimation}
        variants={outerCircleVariants}
        className="overflow-hidden w-full h-full rounded-md"
      >
        <span className="font-serif font-bold text-info">Cory Ball</span>
      </motion.div>
    </div>
  )
}

export default NameTitle
