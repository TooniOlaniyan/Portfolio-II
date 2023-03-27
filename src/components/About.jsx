import React from 'react'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll } from 'framer-motion'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function About() {
  const ref = useRef(null)
  const splitLine = () => {
    gsap.registerPlugin(ScrollTrigger)
    const text = new SplitType('#target', { types: 'lines' })
    const lines = document.querySelectorAll('.line')
    lines.forEach((line) => {
      const div = document.createElement('div')
      div.className = 'line-mask'
      line.appendChild(div)
    })
    const element = ref.current
    const q = gsap.utils.selector(element)
    let triggerElement = q('.line')

    triggerElement.forEach((el, index) => {
      const q = gsap.utils.selector(el)
      let targetElement = q('.line-mask')
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
      })
      tl.to(targetElement, {
        width: '0%',
        ease: 'easeInOut',
      })
    })
  }
  useEffect(() => {
    splitLine()
    window.addEventListener('resize' , () => {
      SplitType.revert('#target')
      splitLine()
    })
  }, [])

  return (
    <Section data-scroll-section id='about'>
      <TextWrapper>
        <RiDoubleQuotesL className='left' />
        <span>About</span>
        <div ref={ref} className='test' id='target'>
          I am Front-End Developer based in Nigeria. I love bringing beautiful
          and interactive experience to the web. I believe that the best
          websites are those that are intuitive, easy to use, and visually
          appealing. With an artistic eye, I have worked closely with clients to
          understand their needs and their audience, and I use that information
          to create websites that meet and exceed their expectations. I'm
          passionate about learning new technologies and how they can be
          implemented. With years of exerience, I am here to bring you seamless
          user experience on the web.
        </div>
        <RiDoubleQuotesR className='right' />
      </TextWrapper>
    </Section>
  )
}

const Section = styled.div`
  overflow: hidden;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
  
  }
`
const TextWrapper = styled(motion.div)`
  color: ${({ theme }) => theme.colors.textColor};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: 80vw;
  line-height: 2em;
  font-size: 1.5rem;
  text-align: justify;
  /* background-color: red; */
  @media screen and (max-width: 640px) {
    margin-top: 4rem;
    font-size: 1.5rem;
    width: 100vw;
    padding: 0 1rem;
    flex-direction: column;
    gap: 0;
  }

  #target {
    font-kerning: none;
    position: relative;
    @media screen and (max-width: 640px) {
      width: 100vw;
      /* background-color: red; */
      font-kerning: none;
      padding: 0.5rem;
    }

    .line {
      color: ${({ theme }) => theme.colors.textColor};
      position: relative;
      @media screen and (max-width: 640px) {
        width: 100vw;
      }
      .line-mask {
        position: absolute;
        background-color: #000;
        opacity: 0.65;
        top: 0;
        right: 0;
        width: 100%;
        z-index: 4;
        height: 100%;
        @media screen and (max-width: 640px) {
          width: 100vw;
        }
      }
    }
  }
  .right {
    width: 10rem;
    align-self: flex-end;
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
  .left {
    width: 10rem;
    @media screen and (max-width: 640px) {
      display: none;
    }
  }
  span {
    font-size: 1.2rem;
    color: #fff;
    @media screen and (max-width: 640px) {
      /* display: none; */
      font-size: 1.1rem;
    }
  }
`

export default About
