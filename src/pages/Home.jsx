import React from 'react'
import About from '../components/About'
import CustomCursor from '../components/CustomCursor'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Skills from '../components/Skills'
import styled from 'styled-components'
import Transition from '../components/Transition'
import gsap from 'gsap'

function Home() {
  const home = gsap.timeline()

  return (
    <>
      <CustomCursor />
      <Transition timeline={home} />
      <Main>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Footer />
      </Main>
    </>
  )
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.body};
  @media screen and (max-width: 640px) {
    gap: 4rem;
    overflow-x: hidden;
  }
`
export default Home
