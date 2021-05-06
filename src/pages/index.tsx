import React from 'react';
import { NextPage } from 'next'
import { Intro, Background, Skills, Experience } from '../components/home'

const Home: NextPage = () => {

  return (
    <div className="flex flex-col bg-primary items-center">
      <Intro />
      <Background />
      <Skills />
      <Experience />
    </div>
  )
}

export default Home;
