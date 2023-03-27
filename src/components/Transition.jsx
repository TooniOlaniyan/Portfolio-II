import React , {useRef , useEffect} from 'react'
import styled from 'styled-components'
import {Power4} from 'gsap'

function Transition({timeline}) {
    const trans = useRef(null)
    useEffect(() => {
        timeline.to(trans.current, {
            duration:7,
            x:2600,
            ease:Power4.easeOut
        })

    })
  return (
    <Main>
      <div ref={trans} className='transition'></div>
    </Main>
  )
}
const Main = styled.div`
    .transition{
        z-index: 1000000;
        background-color: ${({theme}) => theme.colors.textColor};
        position: absolute;
        top: 0;
        width: 100%;
        height: 100vh;
    }
`
export default Transition