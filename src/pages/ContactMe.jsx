import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser'
import { ClipLoader } from 'react-spinners'
import { BsArrowLeft } from 'react-icons/bs'
import CustomCursor from '../components/CustomCursor'
import { useNavigate } from 'react-router-dom'
import Transition from '../components/Transition'
import gsap from 'gsap'

function ContactMe() {
  const navigate = useNavigate()
  const formRef = useRef(null)
  const [loading, setIsLoading] = useState(false)

  const contact = gsap.timeline()
  const tl = gsap.timeline()
  const handleClick = () => {
    navigate('/')
    tl.reverse()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await emailjs.sendForm(
        'service_2mr8qyg',
        'template_y0n40b8',
        formRef.current,
        '1g5UIVelOQB93GewR'
      )
      if (response.text === 'OK') {
        toast.success('Message sent')
        setIsLoading(false)
        formRef.current.reset()
      }
    } catch (error) {
      toast.error('Something went wrong, try again')
      setIsLoading(false)
      formRef.current.reset()
    }
  }



  return (
    <motion.div
      initial={{ width: '100vw', height: '100vh', backgroundColor: '#000' }}
      animate={{ width: '-100vw' }}
      transition={{ duration: 0.5 }}
    >
      <Transition timeline={contact} />

      <CustomCursor />
      <Main>
        <motion.div className='header'>
          <motion.p
            initial={{ opacity: 0.5, y: '-20' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'linear' }}
          >
            Get in touch with me
          </motion.p>
          <motion.div
            onClick={handleClick}
            initial={{ opacity: 0, y: '-20' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeIn' }}
            className='back'
          >
            <p>Go back</p>
            <BsArrowLeft size={30} className='backBtn' />
          </motion.div>
        </motion.div>
        <Form
          transition={{
            staggerChildren: 1,
            ease: 'easeIn',
            delayChildren: 0.5,
          }}
          ref={formRef}
        >
          <motion.div
            initial={{ opacity: 0.5, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className='formArea'
          >
            <label htmlFor=''>Name</label>
            <input
              required
              type='text'
              name='from_name'
              placeholder='Your name'
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className='formArea'
          >
            <label htmlFor=''>E-mail</label>
            <input
              required
              type='email'
              placeholder='Your Email'
              name='user_email'
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0.5, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6 }}
            className='formArea'
            aria-required
          >
            <label htmlFor=''>Message</label>
            <textarea
              required
              name='message'
              cols='30'
              rows='6'
              placeholder='Write your message'
            ></textarea>
          </motion.div>
          <motion.div className='btn'>
            <motion.button
              onClick={handleSubmit}
              initial={{ opacity: 0.5, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1,
                duration: 1,
                easings: ['circIn', 'circOut'],
              }}
              data-content='Send it in'
            >
              Send it in
            </motion.button>
            {loading ? <ClipLoader color='#fff' /> : ''}
          </motion.div>
        </Form>
      </Main>
    </motion.div>
  )
}

const Main = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media screen and (max-width: 640px) {
    padding: 1rem;
    overflow: hidden;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    width: 100%;
    
    @media screen and (max-width: 640px) {
      /* background-color: red; */
      justify-content: space-around;
    }
    .backBtn {
      fill: #fff;
    }
    .back {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      transition: all 0.7s ease;
      &:hover {
        gap: 1.7rem;
        @media screen and (max-width: 640px) {
          gap: 1.3rem;
        }
      }
    }
    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: 1.3rem;
      position: relative;
      overflow: hidden;

      @media screen and (max-width: 640px) {
        font-size: 1rem;
      }
    }
  }
`

const Form = styled(motion.form)`
  /* border: 1px solid white; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* overflow: hidden; */
  label {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 1.1rem;
    @media screen and (max-width: 640px) {
      font-size: 1rem;
    }
  }
  .formArea {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    input {
      border: 1px solid ${({ theme }) => theme.colors.body};
      background-color: ${({ theme }) => theme.colors.body};
      border-bottom: 2px solid ${({ theme }) => theme.colors.textColor};
      padding: 0.5rem 0.2rem;
      font-size: 1.7rem;
      color: ${({ theme }) => theme.colors.white};
      outline: none;

      @media screen and (max-width: 640px) {
        font-size: 1.2rem;
      }
      &::placeholder {
        font-family: 'NeueHaasDisplayLight';
        color: ${({ theme }) => theme.colors.white};
      }
    }
    textarea {
      background-color: ${({ theme }) => theme.colors.body};
      border: 1px solid ${({ theme }) => theme.colors.body};
      resize: none;
      border-bottom: 2px solid ${({ theme }) => theme.colors.textColor};
      color: ${({ theme }) => theme.colors.white};
      outline: none;
      padding: 0.5rem 0.2rem;
      font-size: 1.3rem;

      &::placeholder {
        font-size: 1.5rem;
        font-family: 'NeueHaasDisplayLight';
        color: ${({ theme }) => theme.colors.white};
        @media screen and (max-width: 640px) {
          font-size: 1.2rem;
        }
      }
    }
  }
  .btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    button {
      border: none;
      font-size: 2rem;
      background-color: ${({ theme }) => theme.colors.body};
      color: ${({ theme }) => theme.colors.white};
      position: relative;
      cursor: pointer;
      &:hover::before {
        height: 0;
      }
    }

    .icon {
      fill: ${({ theme }) => theme.colors.textColor};
    }
  }
`
export default ContactMe
