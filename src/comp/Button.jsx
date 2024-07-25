import React from 'react'
import styled from 'styled-components'

function Button(props) {
    const Button = styled.button`
      padding: 0rem 2rem;
      font: 800 3rem arial;

      height: 5rem;
      background: ${props.bg};
      color: ${props.color};
      border-radius: 0.5rem;
      cursor: pointer;
      
      @media only screen and (max-width: 700px) {
      
        padding: 0rem 2rem;
        font: 800 1.5rem arial;
        margin: 0.25rem 10%;
        width: 80%;
      }
    `

  return (
    <Button>
        <span style={{color: `${props.lcolor}`}}>{props.logo}</span> {props.data} <span style={{color: `${props.color2}`}}>{props.data2}</span>
    </Button>
  )
}

export default Button