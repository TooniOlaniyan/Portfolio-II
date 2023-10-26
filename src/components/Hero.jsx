import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

//Ease
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }

function Hero() {
  return (
    <Section data-scroll-section>
      <TextPart>
        <div className='topFront'>
          <motion.span
          // initial={{ y: -10, opacity: 0.7 , skewY:1 }}
          // whileInView={{ y: 0, opacity: 1 , skewY:0 }}
          // transition={{ ease: 'easeIn', duration: 0.5 }}
          // viewport={{ once: true }}
          >
            Front
          </motion.span>
          <div className='dash'>
            <motion.span
              // initial={{ y: 30, opacity: 0.7 }}
              // whileInView={{ y: 0, opacity: 1 }}
              // transition={{ ease: 'easeIn', duration: 0.8 }}
              // viewport={{ once: true }}
              className='dash-line'
            ></motion.span>
          </div>
          <motion.span
          // initial={{ y: 10, opacity: 0.7 }}
          // whileInView={{ y: 0, opacity: 1 }}
          // transition={{ ease: 'easeIn', duration: 1  }}
          // viewport={{ once: true }}
          >
            End
          </motion.span>
        </div>

          <div className='developer'>
            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>L</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
          </div>
        <motion.div
          data-scroll
          data-scroll-speed='-1'
          data-scroll-direction='vertical'
          className='description'
        >
          <motion.p
            initial={{ y: 25, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.5 }}
            viewport={{ once: true }}
          >
            I create front facing interface with great aesthetic and top-tier
            user experience.
          </motion.p>
        </motion.div>
        <div className='location'>
          <motion.div
            initial={{ y: 10, opacity: 0.5 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 0.9 }}
            viewport={{ once: true }}
            data-scroll
            data-scroll-speed='-1'
            data-scroll-direction='vertical'
            className='geo'
          >
            LOCALE: 9.0765° N / 7.3986° E
          </motion.div>
          <ScrollDown>
            <div>
              <svg
                xmlnsXlink='http://www.w3.org/1999/xlink'
                className='explore-more'
                xmlns='http://www.w3.org/2000/svg'
                width='187'
                viewBox='0 0 187 132'
                height='120'
              >
                <g transform='translate(0.822)'>
                  <g
                    className='g-arrow'
                    dataSvgOrigin='86.27200317382812 0'
                    transform='matrix(1,0,0,1,0,0)'
                    style={{ transformOrigin: '0px 0px' }}
                  >
                    <path
                      d='M87.094,69.443,94.5,72.589l7.407-3.146L94.5,87Z'
                      transform='translate(-0.822 7)'
                      fill='#fff'
                    ></path>
                    <path
                      className='line-explore-down'
                      d='M0,0V83.317'
                      transform='translate(93.678)'
                      fill='none'
                      stroke='#f2e5d7'
                      strokeWidth='2px'
                    ></path>
                  </g>
                  <motion.path
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{
                      duration: 1.2,
                      ease: [0.6, 0.01, -0.05, 0.9],
                    }}
                    className='path-arch'
                    d='M1,117a92.5,92.5,0,0,1,185,0'
                    transform='translate(-0.822 15)'
                    fill='none'
                    stroke='#f2e5d7'
                    strokeMiterlimit='10'
                    strokeWidth='2px'
                    style={{ strokeDasharray: 'none', strokeDashoffset: 0 }}
                  ></motion.path>
                </g>
              </svg>
            </div>
            <motion.p
              animate={{ y: [3, 0], opacity: [0, 1] }}
              transition={{ delay: 0.5, ...transition }}
            >
              Scroll
            </motion.p>
          </ScrollDown>
        </div>
      </TextPart>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    gap: 3rem;
  }
`

const TextPart = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  width: 100vw;
  color: ${({ theme }) => theme.colors.textColor};
  padding: 0 4rem;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 640px) {
      flex-direction: column;
      justify-content: flex-start;
      width: 100vw;
    }
    /* overflow: hidden; */
  }
  p {
    overflow: hidden;
  }
  .location {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .geo {
      text-align: end;
      color: ${({ theme }) => theme.colors.textColor};
      @media screen and (max-width: 640px) {
        justify-self: flex-end;
        width: 100%;
        margin-top: 2rem;
      }
    }
  }
  .topFront {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20rem;
    align-items: center;
    font-size: 1rem;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 640px) {
      padding: 0;
    }
    .dash {
      width: 4rem;
      height: 0.3rem;
      top: 50%;
      right: 50%;
      position: absolute;
      transform-origin: 50%;
      background-color: ${({ theme }) => theme.colors.white};
      @media screen and (max-width: 640px) {
        right: 38%;
      }
    }
  }
  .developer {
    font-size: 18rem;
    margin-top: 2rem;
    letter-spacing: -2rem;
    /* overflow: hidden; */

    @media screen and (max-width: 640px) {
      font-size: 6rem;
      overflow: visible;
      letter-spacing: normal;
      margin-top: 1rem;
      display: flex;
      flex-wrap: wrap;
      gap:0.5rem;
    }

    span {
      transition: all 1s linear;
      position: relative;
      overflow: hidden;
      @media screen and (max-width: 640px) {
        
      }
      &:hover {
        color: #f2e5d7;
      }
    }
  }
  .description {
    font-size: 1.5rem;
    font-weight: 100;
    overflow: hidden;
    @media screen and (max-width: 640px) {
      font-size: 1.2rem;
    }
  }

  @media screen and (max-width: 640px) {
    width: 100vw;
    padding: 0 1rem;
  }
`
const ScrollDown = styled(motion.div)`
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  bottom: -2rem;
  right: 15rem;
  P {
    width: min-content;
    font-size: 12px;
    text-align: start;
    color: ${({ theme }) => theme.colors.textColor};
    margin-top: -2rem;
    font-weight: 600;
  }
  @media screen and (max-width: 640px) {
    display: none;
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

export default Hero
