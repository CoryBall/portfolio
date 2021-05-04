import React from 'react';
import { motion, useAnimation, Variants } from 'framer-motion'


type BinarySearchProps = {
  size: number;
  search: number;
  begin: boolean;
}

const BinarySearchExample: React.FC<BinarySearchProps> = (props: BinarySearchProps) => {
  const { size, search, begin } = props;
  const data: number[] = Array.from(Array(size).keys());
  const [minBound, setMinBound] = React.useState<number>(0);
  const [maxBound, setMaxBound] = React.useState<number>(size);
  let guess = size / 2;
  let cancelled = false;
  const searchVariants: Variants = {
    initial: {
      opacity: 1,
    },
    process: {
      opacity: 0.75,
    }
  }
  const searchAnimation = useAnimation();
  React.useEffect(() => {
    void (async () => {
      while (guess !== search || cancelled) {
        if (begin) {
          // start processing animation
          await searchAnimation.start('process');
          // algo logic
          if (guess < search) {
            setMinBound(guess + 1);
          } else {
            setMaxBound(guess - 1);
          }
          // eslint-disable-next-line no-console
          console.log('guess: ', guess);
          // eslint-disable-next-line no-console
          console.log('minBound: ', minBound);
          // eslint-disable-next-line no-console
          console.log('maxBound: ', maxBound);
          // eslint-disable-next-line no-console
          console.log('\n')
          guess = Math.floor(((maxBound - minBound) / 2) + minBound)
          // wait for 2 seconds before starting next iteration
          await searchAnimation.start('initial', {
            duration: 2,
          })
        } else {
          // reset animation and clear guess;
          await searchAnimation.start('initial');
          setMinBound(0);
          setMaxBound(size);
          guess = size / 2;
          cancelled = true;
        }
      }
    })();
  }, [begin]);

  return (
    <motion.div variants={searchVariants} animate={searchAnimation} className="grid grid-cols-12 gap-4 overflow-y-visible h-full w-full">
      {data.map((index: number) => (
        <Item number={index} min={minBound} max={maxBound} key={index} />
        )
      )}
    </motion.div>
  )
}

type ItemProps = {
  number: number;
  max: number;
  min: number;
}

const Item: React.FC<ItemProps> = (props: ItemProps) => {
  const {number, max, min} = props;
  const itemVariants: Variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    }
  }
  const itemAnimations = useAnimation();
  React.useEffect(() => {
    void (async () => {
      if (number < min || number > max) {
        await itemAnimations.start('hidden', {
          duration: 1
        })
      }
    })();
  }, [min, max])
  return (
    <motion.div variants={itemVariants} animate={itemAnimations} className="bg-teal-500 rounded-md text-center" key={number}>
      <span>{number + 1}</span>
    </motion.div>
  )
}

export default BinarySearchExample;
