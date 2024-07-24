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
    `

  return (
    <Button>
        <span style={{color: `${props.lcolor}`}}>{props.logo}</span> {props.data} <span style={{color: `${props.color2}`}}>{props.data2}</span>
    </Button>
  )
}

export default Button