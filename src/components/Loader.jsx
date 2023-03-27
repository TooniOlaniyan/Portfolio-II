import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import gsap from 'gsap'

function Loader() {
  const [figure, setFigure] = useState(1)
  const [line, setLine] = useState('')
  const barRef = useRef(null)
  const loading = () => {
    const tl = gsap.timeline({
      paused: 'true',
    })
    tl.to('.bar', {
      width: '100%',
      duration: 5,
    })
    let width = 1
    console.log(width)
    if (width <= 100) {
      tl.play()
    }else{
      width++
      setFigure(width)
      
    }
  }

  useEffect(() => {
    loading()
  }, [])

  return (
    <Container>
      <div className='loader'>
        <p className='loadText'>Loading</p>
        <div ref={barRef} className='bar'></div>
        <p className='percentage'>{figure} %</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.body};
  overflow: hidden;
  .loader {
    @media screen and (max-width: 640px) {
      overflow: hidden;
    }
    .percentage {
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
      /* letter-spacing: 0.5rem; */
    }
    width: 50vw;
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .loadText {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.white};
      letter-spacing: 0.5rem;
    }
  }
  .bar {
    width: 1%;
    border-radius: 0.2rem;
    height: 0.3rem;
    background-color: ${({ theme }) => theme.colors.white};
    align-self: flex-start;
  }
`

export default Loader
