import React from 'react';
import { NextPage } from 'next'
import { Header } from '../components/common'
import { Intro, Background, Skills, Experience } from '../components/home'

const Home: NextPage = () => {

  return (
    <div className="flex flex-col bg-light items-center">
      <Header/>
      <Intro />
      <Background />
      <Skills />
      <Experience />
    </div>
  )
}

export default Home;
