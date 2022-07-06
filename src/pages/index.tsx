import React from 'react'
import { NextPage } from 'next'
import { Intro, Background, Skills, Experience } from '../components/home'
import { FaPaperPlane, FaFileDownload } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-dark items-center space-y-20 md:space-y-52 pt-16 pb-36">
      <Intro />
      <Background />
      <Skills />
      <Experience />
      <div className="w-3/4 flex flex-col md:flex-row space-y-8 md:justify-center md:space-x-12 md:space-y-0">
        <a
          className="flex flex-col items-center bg-primary text-light font-semibold text-xl py-2 px-4 rounded-md self-center text-center"
          href="mailto:coryball97@gmail.com"
          target="_blank"
          title="email"
          rel="noreferrer"
        >
          Get in touch
          <FaPaperPlane />
        </a>
        <a
          className="flex flex-col items-center bg-primary text-light font-semibold text-xl py-2 px-4 rounded-md self-center text-center"
          href="https://cdn.coryball.dev/portfolio/resume/Resume_CoryBall.pdf"
          target="_blank"
          title="resume"
          rel="noreferrer"
        >
          Download my resume
          <FaFileDownload />
        </a>
      </div>
    </div>
  )
}

export default Home
