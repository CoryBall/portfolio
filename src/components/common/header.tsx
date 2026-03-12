import React from 'react'
import { motion } from 'framer-motion'

const Header: React.FC = () => {
  return (
    <motion.nav className="fixed w-full flex justify-between text-light px-8 py-5 h-30">
      <a
        className="focus:outline-none text-2xl font-bold font-serif mt-3"
        href="/"
      >
        CB
      </a>
      <div>
        <a href="https://github.com/coryball" target="_blank" rel="noreferrer">
          <img src="/social/github-light.png" alt="Github Icon" width={50} height={50} />
        </a>
      </div>
    </motion.nav>
  )
}

export default Header
