import React from 'react'
import styled from 'styled-components'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project6 from '../assets/project6.png'
import project7 from '../assets/project7.png'
import {BsGithub} from 'react-icons/bs'
import { ImArrowUpRight2 } from 'react-icons/im'
import {motion} from 'framer-motion'

function Project() {
   const parent = {
     initial: {
       y: 0,
     },
     animate: {
       y: 0,
       transition: {
         staggerChildren: 0.8,
       },
     },
   }
  return (
    <Main id="project" data-scroll-section>
      <RecentWorks>
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="LineTop"
        ></motion.span>
        <div
          data-scroll
          data-scroll-speed="2"
          data-scroll-direction="horizontal"
          className="recent"
        >
          <h1>RECENT PROJECTS_</h1>
          <h1>RECENT PROJECTS_</h1>
          <h1>RECENT PROJECTS_</h1>
          <h1>RECENT PROJECTS_</h1>
          <h1>RECENT PROJECTS_</h1>
          <h1>RECENT PROJECTS_</h1>
          <h1>RECENT PROJECTS_</h1>
        </div>
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "linear" }}
          className="LineButtom"
        ></motion.span>
      </RecentWorks>
      <Works>
        <Link
          data-scroll
          data-scroll-speed="-2.2"
          data-scroll-direction="vertical"
        >
          <motion.div
            whileHover={{ scale: 0.96 }}
            transition={{ duration: 0.5 }}
            className="image"
          >
            <img loading="lazy" src={project7} alt="" />
          </motion.div>
          <div className="links">
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TooniOlaniyan/help_me_rizz_ai"
            >
              <BsGithub size={30} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              rel="noreferrer"
              href="https://help-me-rizz-9wbt4ve79-tooniolaniyan.vercel.app/"
            >
              <ImArrowUpRight2 size={30} />
            </motion.a>
          </div>
        </Link>
        <Text
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
          variants={parent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2>RUMI AI texting assistance </motion.h2>
          <motion.p>
            RUMI AI is an AI powered wingman
            <br /> built with Nextjs, Typescript, OpenAi and tailwindcss
          </motion.p>
        </Text>
      </Works>
      <Works>
        <Link
          data-scroll
          data-scroll-speed="-2.2"
          data-scroll-direction="vertical"
        >
          <motion.div
            whileHover={{ scale: 0.96 }}
            transition={{ duration: 0.5 }}
            className="image"
          >
            <img loading="lazy" src={project6} alt="" />
          </motion.div>
          <div className="links">
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/TooniOlaniyan/cardtonic-user-dashboard-clone"
            >
              <BsGithub size={30} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              rel="noreferrer"
              href="https://cardtonic-user-dashboard-clone.vercel.app/"
            >
              <ImArrowUpRight2 size={30} />
            </motion.a>
          </div>
        </Link>
        <Text
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
          variants={parent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2>A UserDashbord</motion.h2>
          <motion.p>
            This is a clone of cardtonic.com User dashboard <br /> built with
            Reactjs
          </motion.p>
        </Text>
      </Works>
      <Works>
        <Text
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
          variants={parent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2>An E-bike Landing Page</motion.h2>
          <motion.p>
            A landing page using <br /> React and tailwind
          </motion.p>
        </Text>
        <Link
          data-scroll
          data-scroll-speed="-2.2"
          data-scroll-direction="vertical"
        >
          <motion.div className="image">
            <img className="test" loading="lazy" src={project1} alt="" />
          </motion.div>

          <div className="links">
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              href="https://github.com/TooniOlaniyan/bike-landingpage"
            >
              <BsGithub size={30} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              href="https://ebike-landingpage.vercel.app/"
            >
              <ImArrowUpRight2 size={30} />
            </motion.a>
          </div>
        </Link>
      </Works>
      <Works>
        <Link
          data-scroll
          data-scroll-speed="-2.2"
          data-scroll-direction="vertical"
        >
          <motion.div
            whileHover={{ scale: 0.96 }}
            transition={{ duration: 0.8 }}
            className="image"
          >
            <img loading="lazy" src={project2} alt="" />
          </motion.div>
          <div className="links">
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              href="https://github.com/TooniOlaniyan/WAGMI"
            >
              <BsGithub size={30} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              href="https://wagmi-xi.vercel.app/"
            >
              <ImArrowUpRight2 size={30} />
            </motion.a>
          </div>
        </Link>
        <Text
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
          variants={parent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2>WAGMI APP</motion.h2>
          <motion.p>
            A fullstack app for investing <br /> React and Firebase
          </motion.p>
        </Text>
      </Works>
      <Works>
        <Text
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
          variants={parent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2>Cardtonic Landing Page</motion.h2>
          <motion.p>
            A clone of Cardtonic page <br /> using Reactjs
          </motion.p>
        </Text>
        <Link
          data-scroll
          data-scroll-speed="-3"
          data-scroll-direction="vertical"
        >
          <motion.div
            whileHover={{ scale: 0.96 }}
            transition={{ duration: 0.8 }}
            className="image"
          >
            <img loading="lazy" src={project3} alt="" />
          </motion.div>
          <div className="links">
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              href="https://github.com/TooniOlaniyan/Cardtonic-Clone"
            >
              <BsGithub size={30} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              href="https://cardtonic-clonelanding.vercel.app/"
            >
              <ImArrowUpRight2 size={30} />
            </motion.a>
          </div>
        </Link>
      </Works>
      <Works>
        <Link
          data-scroll
          data-scroll-speed="-2.2"
          data-scroll-direction="vertical"
        >
          <motion.div
            whileHover={{ scale: 0.96 }}
            transition={{ duration: 0.8 }}
            className="image"
          >
            <img loading="lazy" src={project4} alt="" />
          </motion.div>
          <div className="links">
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              href="https://github.com/TooniOlaniyan/houseSale-App"
            >
              <BsGithub size={30} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }}
              target="_blank"
              href="https://house-sale-app-rosy.vercel.app/"
            >
              <ImArrowUpRight2 size={30} />
            </motion.a>
          </div>
        </Link>
        <Text
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="vertical"
          variants={parent}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.h2>A House sale App</motion.h2>
          <motion.p>
            An app to Sell and List houses <br /> built with Reactjs
          </motion.p>
        </Text>
      </Works>
    </Main>
  );
}

const Main = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 13rem;
  max-width: 100vw;
  overflow: hidden;
  @media screen and (max-width: 640px) {
    gap: 7rem;
    margin-top: 2rem;
  }
  @media screen and (max-width: 450px) {
    gap: 4rem;
    margin-top: 10rem;
  }
`

const RecentWorks = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
position: relative;
max-width: 90vw;
padding: 3rem 0;
.recent{
  display: flex;
  width: max-content;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${({theme}) => theme.colors.textColor};
}
  .LineTop{
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: all 0.5s;
    position: absolute;
    top: 0;
    left: 0;
    
  }
  .LineButtom{
    height: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    transition: all 0.5s;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media screen and (max-width: 640px) {
    width: 90vw;
    gap: 2rem;
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    width: 90vw;
    gap: 0.7rem;
  }

  h1 {
    font-size: 70px;
    font-weight: 600;

    @media screen and (max-width: 640px) {
      font-size: 40px;
      width: max-content;
    }
    @media screen and (max-width: 450px) {
      font-size: 30px;
      width: max-content;
    }
  }
`
const Works = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80vw;
  align-items: center;
  @media screen and (max-width: 640px) {
    flex-direction: column;
  }
  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
  
 
`

const Text = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  align-items: flex-end;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
  color: ${({ theme }) => theme.colors.textColor};
  @media screen and (max-width: 640px) {
    width: 85vw;
    margin: 0.5rem;
    align-items: flex-start;
  }
  @media screen and (max-width: 890px) {
    width: 85vw;
    align-items: flex-end;
    margin: 1rem;
  }

  h2 {
    font-size: 2rem;
    font-weight: 600;
    overflow: hidden;
    letter-spacing: 2px;
    @media screen and (max-width: 640px) {
      font-size: 1.3rem;
    }
  }
  p {
    overflow: hidden;
    font-size: 1rem;
    line-height: 1.7rem;
    letter-spacing: 2px;
    text-align: right;
    max-width: fit-content;
    @media screen and (max-width: 640px) {
      font-size: 0.8rem;
    }
  }
`
const Link = styled.div`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  .links {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0.6rem;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 20px;
    z-index:999;
    @media screen and (max-width: 640px) {
      width: 85vw;
    }
    @media screen and (max-width: 890px) {
      width: 85vw;
    }

    a {
      color: #d6e5fa;
    }
  }
  .image {
    width: 500px;
    height: 150px;
    overflow: hidden;
    position: relative;
    @media screen and (max-width: 640px) {
      width: 85vw;
    }
    @media screen and (max-width: 890px) {
      width: 85vw;
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
      object-fit: cover;
      transition: all 0.8s;
      &:hover {
        scale: 1.1;
      }
    }
  }
`
export default Project