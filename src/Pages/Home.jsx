import React from 'react'
import Hero from '../Components/Hero/Hero'
import Skills from '../Components/My Skills/Skills'
import Portfolio from '../Components/Portfolio/Portfolio'
import CountSection from '../Components/Count Section/CountSection'
import Testimonials from '../Components/Testimonials/Testimonials'

const Home = () => {
  return (
    <>
        <Hero />
        <Skills/>
        <Portfolio />
        <CountSection />
        <Testimonials />
    </>
  )
}

export default Home