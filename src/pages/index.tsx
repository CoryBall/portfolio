import React from 'react';
import { NextPage } from 'next'
import { Intro, Background, Skills, Experience } from '../components/home'

const Home: NextPage = () => {

  return (
    <div className="flex flex-col bg-primary items-center space-y-20 md:space-y-52 pt-16 pb-36">
      <Intro />
      <Background />
      <Skills />
      <Experience />
      <a className="bg-info text-white font-semibold text-xl py-2 px-4 rounded-md self-center text-center" href="mailto:coryball97@gmail.com" target="_blank" title="email">
        Get in touch
      </a>
    </div>
  )
}

export default Home;
