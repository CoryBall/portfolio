import React from 'react';
import { NextPage } from 'next'
import { Header } from '../components/common'
import { Intro, Background, Skills, Experience } from '../components/home'

const Home: NextPage = () => {

  return (
    <div className="flex flex-col bg-light items-center">
      <a className="skip-link" href={"#mainContent"}>Skip to main</a>
      <Header/>
      <main id="mainContent">
        <Intro />
        <Background />
        <Skills />
        <Experience />
      </main>
    </div>
  )
}

export default Home;
