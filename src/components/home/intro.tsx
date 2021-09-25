import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'

const Intro: React.FC = () => {
  return (
    <section id="intro" className="section flex-col">
      <motion.p
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            x: '-100%',
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.5,
            },
          },
        }}
        className="self-start text-xl font-sans text-light mb-4"
      >
        Hi, I&apos;m
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            scale: 0,
          },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delay: 1.25,
            },
          },
        }}
        className="hover:animate-pulse block text-4xl md:text-6xl 2xl:text-8xl font-serif font-bold text-secondary"
      >
        Cory Ball
      </motion.p>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: '200%',
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 2,
            },
          },
        }}
        className="text-md md:text-xl lg:text-2xl font-sans text-light my-5"
      >
        A Northwest Arkansas Full Stack Developer with experience creating
        responsive web apps, cross-platform mobile apps, and modular backend API
        services
      </motion.p>
      <div className="flex flex-col md:flex-row w-3/4 items-center mx-auto md:justify-around">
        <motion.a
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 2.5,
              },
            },
          }}
          className="text-secondary font-semibold text-xl text-center hover:animate-pulse mt-6"
          href="mailto:coryball97@gmail.com"
          target="_blank"
          title="email"
        >
          coryball97@gmail.com
        </motion.a>
        <motion.a
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 2.5,
              },
            },
          }}
          className="text-secondary font-semibold text-xl text-center hover:animate-pulse mt-6"
          href="https://cdn.coryball.dev/portfolio/resume/Resume_CoryBall.pdf"
          target="_blank"
          rel="noreferrer"
          title="resume"
        >
          CV
          <FontAwesomeIcon
            className="self-start md:self-center text-secondary ml-4 mt-2 md:mt-0 text-xl"
            icon={faFileDownload}
          />
        </motion.a>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center mt-8">
        <motion.button
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 2.75,
              },
            },
          }}
          className="button"
        >
          <Link href={'#background'}>About Me</Link>
        </motion.button>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 3,
              },
            },
          }}
          className="button"
        >
          <Link href={'#skills'}>Skills</Link>
        </motion.button>
        <motion.button
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              scale: 0,
            },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 3.25,
              },
            },
          }}
          className="button"
        >
          <Link href={'#experience'}>Experience</Link>
        </motion.button>
      </div>
    </section>
  )
}

export default Intro
