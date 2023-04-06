import React from 'react'
import styled from 'styled-components'
import TimeComponent from '../components/TimeComponent'
import {BsArrowUpShort} from 'react-icons/bs'
import {motion} from 'framer-motion'
import '../App.css'

function Footer() {

  return (
    <div data-scroll-section id='footer'>
      <Section
        data-scroll
        data-scroll-speed='-1'
        data-scroll-direction='vertical'
      >
        <Social>
          <motion.a href='https://twitter.com' target='_blank'>
            Twitter
          </motion.a>
          <motion.a href='https://github.com/TooniOlaniyan' target='_blank'>
            GitHub
          </motion.a>
          <motion.a
            href='https://www.linkedin.com/in/tooni-olaniyan-a3144222b/'
            target='_blank'
          >
            Linkedin
          </motion.a>
        </Social>
        <motion.div className='date'>
          <TimeComponent />
          <p>Designed By : 🙋‍♂️</p>
          <div className='time'>
          <BsArrowUpShort size={40} className='icon'/>
            <p>Go back up</p>
          </div>

        </motion.div>
      </Section>
    </div>
  )
}

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  gap: 10rem;
  color: ${({ theme }) => theme.colors.textColor};
  @media screen and (max-width: 640px) {
    gap: 2rem;
    flex-direction: column;
    margin-top: 7rem;
  }
  @media screen and (max-width: 890px) {
    gap: 2rem;
    flex-direction: column;
    margin-top: 7rem;
  }

  .pop {
    position: absolute;
    top: 1rem;
    left: 0.5rem;
    font-size: 19px;
    font-weight: 900;
    font-style: italic;
  }
  .date {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
    letter-spacing: 2px;
    .time{
      display: flex;
      justify-content: center;
      align-items: center;
    
      p{
        font-size: 0.6rem;
        
      }
    }
    .icon{
    }
    @media screen and (max-width: 640px) {
      flex-direction: column;
      gap: 2rem;
    }
  }
  .otherPart {
    /* border: 2px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #232622;
      font-size: 18px;
      letter-spacing: 3px;
      overflow: hidden;
    }
    button {
      font-size: 40px;
      padding: 0.5rem 1rem;
      border-radius: 10px;
      background-color: #7d0633;
      color: white;
      font-weight: 700;
      border: none;
      @media screen and (max-width: 640px) {
        font-size: 35px;
      }
      @media screen and (max-width: 450px) {
        font-size: 30px;
        width: max-content;
      }
      &:hover {
        color: #ff87b2;
      }
    }
  }
`
const Social = styled(motion.div)`
  display: flex;
  justify-content: center;
  justify-content: center;
  gap: 1rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.5rem 0;
    gap: 1rem;
    font-size: 28px;
    letter-spacing: 4px;
    font-weight: 600;
    position: relative;
    overflow: hidden;
    @media screen and (max-width: 640px) {
      font-size: 22px;
    }
    @media screen and (max-width: 450px) {
      font-size: 20px;
    }

    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 4px;
      bottom: 0;
      left: 0;
      transition: all 0.7s ease-out;
    }
  }
  a:hover::before {
    width: 100%;
  }
`

export default Footer