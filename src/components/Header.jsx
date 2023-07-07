import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll'

function Header() {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] }
  const navigate = useNavigate()


  const letter = {
    initial: {
      y: -40,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition },
    },
  }


  const handleClick = () => {
    navigate('/contact')
  }

  return (
    <Main id='header' data-scroll-section>
      <div className='headerContainer'>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.6, 0.01, -0.05, 0.9],
          }}
          className='headerName'
        >
          Tooni Olaniyan
        </motion.p>
      </div>
      <div className='nav-container'>
        <motion.ul>
          <Link
            to='about'
            spy={true}
            smooth='easeInOutQuint'
            offset={-300}
            duration={1200}
          >
            <motion.li>About</motion.li>
          </Link>
          <Link
            to='skills'
            spy={true}
            smooth='easeInOutQuint'
            offset={-70}
            duration={1500}
          >
            <motion.li>Skills</motion.li>
          </Link>
          <Link
            to='project'
            spy={true}
            smooth='easeInOutQuint'
            offset={-70}
            duration={2000}
          >
            <motion.li>Projects</motion.li>
          </Link>
          <motion.div onClick={handleClick} className='contact'>
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
        <div onClick={handleClick} className='contactMobile'>
          Contact Me
        </div>
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
  .headerContainer{
    /* overflow:hidden; */
  }
  .contactMobile {
    display: none;
    @media screen and (max-width: 640px) {
      border: 2px solid ${({ theme }) => theme.colors.textColor};
      padding: 0.7rem 1rem;
      border-radius: 2rem;
      font-size: 0.8rem;
      color: ${({ theme }) => theme.colors.textColor};
      width: max-content;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s ease;
      /* display: block; */
    }
  }
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
      &:hover {
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
