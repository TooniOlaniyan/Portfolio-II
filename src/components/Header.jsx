import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import TimeComponent from './TimeComponent'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

function Header() {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }
  const navigate = useNavigate()
  const menu = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.4,
      },
    },
  }

  const letter = {
    initial: {
      y: -40,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
  }

  const { scroll } = useLocomotiveScroll()
  const handleScroll = (id) => {
    let elem = document.querySelector(id)
    scroll.scrollTo(elem, {
      offset: '-200',
      duration: '1000',
      easing: [0.25, 0.0, 0.35, 1.0],
    })
  }

  const handleClick = () => {
    navigate('/contact')
  }

  return (
    <Main data-scroll-section>
      <div>
        <motion.p
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.4,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          className='headerName'
        >
          Tooni Olaniyan
        </motion.p>
      </div>
      <div className='nav-container'>
        <motion.ul >
          <motion.li
            onClick={() => handleScroll('#about')}
          >
            About
          </motion.li>
          <motion.li
            onClick={() => handleScroll('#skills')}
          >
            Skills
          </motion.li>
          <motion.li
            onClick={() => handleScroll('#project')}
          >
            Projects
          </motion.li>
          <motion.div
            onClick={handleClick}
            className='contact'
          >
            Contact Me
          </motion.div>
        </motion.ul>
      </div>
      <motion.div
        variants={letter}
        initial='initial'
        animate='animate'
        className='hamburger'
      >
        <TimeComponent />
      </motion.div>
    </Main>
  )
}
const Main = styled.header`
  display: flex;
  /* overflow: hidden; */
  justify-content: space-around;
  gap: 30rem;
  align-items: center;
  padding: 4rem 0 0 0;
  max-height: 3rem;
  font-size: 18px;
  width: 100vw;
  .headerName {
    color: ${({ theme }) => theme.colors.textColor};
    @media screen and (max-width: 640px) {
      width: max-content;
    }
    @media screen and (max-width: 450px) {
      font-size: 13px;
      padding: 1rem;
      width: max-content;
    }
  }
  @media screen and (max-width: 640px) {
    padding: 0 3rem;
    gap: 4rem;
  }
  .hamburger {
    display: none;
    @media screen and (max-width: 640px) {
      display: block;
    }
  }

  .nav-container ul {
    justify-content: center;
    align-items: center;
    display: flex;
    color: ${({ theme }) => theme.colors.textColor};
    gap: 2rem;
    position: sticky;
    top: 0;
    .contact {
      border: 2px solid ${({ theme }) => theme.colors.textColor};
      padding: 0.7rem 1rem;
      border-radius: 2rem;
      font-size: 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s ease;
      &:hover{
        color: #000;
      }
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 100%;
        width: 140%;
        height: 180%;
        border-radius: 50%;
        transition: all 1s ease;
        z-index: -1;
      }
      &::after {
        content: '';
        position: absolute;
        left: 55%;
        top: 180%;
        width: 160%;
        height: 190%;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        transition: all 1s ease;
        z-index: -1;
      }
    }

    .contact:hover::before {
      top: -35%;
      color: #000;
      background-color: ${({ theme }) => theme.colors.white};
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
    }

    .contact:hover::after {
      top: -45%;
      background-color: ${({ theme }) => theme.colors.white};
      transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
      color: #000;
    }

    li {
      position: relative;
      padding: 0.3rem 0;
    }
    li::after {
      content: '';
      position: absolute;
      width: 0;
      height: 1.5px;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.white};
      transition: all 0.3s ease-out;
    }
    li:hover::after {
      width: 100%;
    }

    @media screen and (max-width: 640px) {
      display: none;
    }
  }
`

export default Header