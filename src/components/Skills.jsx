import styled from 'styled-components'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <Main data-scroll-section id='skills'>
      <div className='container'>
        <motion.div className='skillText'>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'linear' }}
          >
            My skills
          </motion.p>
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'circInOut' }}
            className='lineButtom'
          ></motion.span>
        </motion.div>
      </div>
      <Skill>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <p> ReactJS ⏤ I use it to create Web app with Reusable components</p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <p>NextJs ⏤ Build high performance app with serverside rendering</p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <p>
            JavaScript ⏤ Adding interactivity and functionality to web pages{' '}
          </p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <p>TypeScript ⏤ Adding type safety to JavaScript code</p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <p>
            Framer-Motion ⏤ Imporved animation for better user interactions{' '}
          </p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <p>
            Redux && Redux-Toolkit ⏤ Managing state in complex web applications{' '}
          </p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <p>Firebase ⏤ Manage and handle NoSql database </p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <p>
            CSS3 ⏤ Styling web pages, including layout, typography, and color{' '}
          </p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <p>
            Responsive design ⏤ Creating web pages that adapt to different
            screen sizes and devices{' '}
          </p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <p>SASS/SCSS ⏤ Creating reusable styles and modular CSS code </p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <p>Tailwind ⏤ Building responsive, mobile-first web pages </p>
          <span className='skillLine'></span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <p>SEO ⏤ Optimizing web pages for search engines </p>
        </motion.div>
      </Skill>
    </Main>
  )
}

const Main = styled.div`
  padding: 0 3rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: column;
  gap: 8rem;
  width: 100vw;
  @media screen and (max-width: 640px) {
    padding: 0 1rem;
    gap: 4rem;
  }
  .container {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    justify-self: flex-start;
    flex-direction: column;
    @media screen and (max-width: 640px) {
    }

    .skillText {
      font-size: 1.7rem;
      margin: 1rem 0;
      overflow: hidden;
      color: ${({ theme }) => theme.colors.white};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 0 0 1rem 0;

      .lineButtom {
        width: 100%;
        height: 2px;
        background-color: ${({ theme }) => theme.colors.textColor};
        right: 0;
        transition: all 0.8s;
        position: absolute;
        bottom: 0;
      }
      @media screen and (max-width: 640px) {
        font-size: 1.4rem;
      }
    }
  }
`
const Skill = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.textColor};
  .skillLine {
    width: 40rem;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.textColor};
    left: 0;
    transition: all 0.5s;
    position: absolute;
    bottom: 0;
    @media screen and (max-width: 640px) {
      width: 90vw;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 0 1rem 0;
    @media screen and (max-width: 640px) {
      font-size: 0.85rem;
    }
  }
`
export default Skills
