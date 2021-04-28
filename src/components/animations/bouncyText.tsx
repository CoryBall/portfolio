import React from 'react'
import { useAnimation, Variants, motion } from 'framer-motion'

export type BouncyTextProps = {
  text: string
}

export type BouncyCharacterProps = {
  character: string
}

const BouncyText: React.FC<BouncyTextProps> = (props: BouncyTextProps) => {
  const characters: string[] = props.text.split('')
  return (
    <div className="relative flex flex-row text-xl font-bold justify-between">
      {characters.map((char: string) => (
        <BouncyCharacter key={characters.indexOf(char)} character={char} />
      ))}
    </div>
  )
}

const BouncyCharacter: React.FC<BouncyCharacterProps> = (
  props: BouncyCharacterProps
) => {
  const characterVariants: Variants = {
    initial: {
      y: '-500',
      transform: 'scale(1)',
    },
    bounceDown: {
      y: '0px',
      transform: 'scale(1)',
    },
    collapse: {
      y: '0px',
      transform: 'scale(0.5)',
    },
    expand: {
      y: '0px',
      transform: 'scale(1)',
    },
    bounceUp: {
      y: '-10px',
      transform: 'scale(1)',
    },
  }
  const characterAnimations = useAnimation()

  React.useEffect(() => {
    void (async () => {
      await characterAnimations.start(
        ['bounceDown', 'collapse', 'expand', 'bounceUp'],
        {
          repeat: Infinity,
          repeatType: 'mirror',
          duration: 1,
        }
      )
    })()
  }, [])

  return (
    <motion.div
      animate={characterAnimations}
      variants={characterVariants}
      className="relative"
    >
      <span>{props.character}</span>
    </motion.div>
  )
}
export default BouncyText
