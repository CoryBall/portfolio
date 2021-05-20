import React from 'react'
import { NextPage } from 'next'
import { Intro, Background, Skills, Experience } from '../components/home'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col bg-dark items-center space-y-20 md:space-y-52 pt-16 pb-36">
      <Intro />
      <Background />
      <Skills />
      <Experience />
      <div className="w-3/4 flex flex-col md:flex-row space-y-8 md:justify-center md:space-x-12 md:space-y-0">
        <a
          className="bg-primary text-light font-semibold text-xl py-2 px-4 rounded-md self-center text-center"
          href="mailto:coryball97@gmail.com"
          target="_blank"
          title="email"
          rel="noreferrer"
        >
          Get in touch
          <FontAwesomeIcon
            className="self-start md:self-center text-light ml-4 mt-2 md:mt-0 text-xl"
            icon={faPaperPlane}
          />
        </a>
        <a
          className="bg-primary text-light font-semibold text-xl py-2 px-4 rounded-md self-center text-center"
          href="https://cdn.coryball.dev/portfolio/resume/Resume_CoryBall.pdf"
          target="_blank"
          title="resume"
          rel="noreferrer"
        >
          Download my resume
          <FontAwesomeIcon
            className="self-start md:self-center text-light ml-4 mt-2 md:mt-0 text-xl"
            icon={faFileDownload}
          />
        </a>
      </div>
    </div>
  )
}

export default Home
