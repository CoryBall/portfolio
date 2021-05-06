import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'


const Intro: React.FC = () => {
  return (
    <section id="intro" className="section flex-col">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            x: "-100%",
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.5,
            },
          },
        }}
        className="self-start text-xl font-sans text-dark mt-3">
        Hi, I'm
      </motion.span>
      <br/>
      <motion.span
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
        className="hover:animate-pulse block text-4xl md:text-6xl 2xl:text-8xl font-serif font-bold text-info">
        Cory Ball
      </motion.span>
      <br/>
      <motion.span
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            opacity: 0,
            y: "200%",
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delay: 2,
            },
          },
        }}
        className="text-md md:text-xl lg:text-2xl font-sans text-dark mt-5">
        A Northwest Arkansas Full Stack Developer with experience creating responsive web apps, cross-platform mobile apps, and modular backend API services
      </motion.span>
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
        className="text-info font-semibold text-xl py-2 px-4 rounded-md self-center text-center hover:animate-pulse mt-6"
        href="mailto:coryball97@gmail.com"
        target="_blank"
        title="email"
      >
        coryball97@gmail.com
      </motion.a>
      <div className="flex flex-col sm:flex-row sm:justify-center lg:mt-8">
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
          className="button">
          <Link href={"#background"}>
            About Me
          </Link>
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
          className="button">
          <Link href={"#skills"}>
            Skills
          </Link>
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
          className="button">
          <Link href={"#experience"}>
            Experience
          </Link>
        </motion.button>
      </div>
    </section>
  )
}

export default Intro;
