import { useEffect, useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;

    display: ${props => props.show === true ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;

    background-color: rgba(0, 0, 0, 0);
    height: 100vh;
    width: 100vw;
    z-index: 100;

  .content {
    margin-top: -100px;
    background-color: #fff;
    padding: 1em;
  }

  animation: ${props => props.show === true ? 'show_animation' : 'none'} .3s forwards;
  animation-delay: .1s;
  
  @keyframes show_animation {
    100% {
      background-color: rgba(0,0,0,0.6);
    }
  }
  
`




export default function Modal(props) {


  
  return (
    <Container show={props.show}>
        <div className="content">
            <div>sasasassaassas </div>
        </div>
    </Container>
  )
}