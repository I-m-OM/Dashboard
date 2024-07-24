import React from 'react'
import styled from 'styled-components'

    const Fail = styled.div`
        width: 100%;
        text-align: center;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        height: 100vh;
        background: linear-gradient(to right, #c9d6ff, #e2e2e2);

        h1 {
            margin-top: 5rem;
        } 

        p {
            margin-top: 5rem;
        }
    `

function Failed() {
  return (
    <Fail>
        <h1>Error - 404</h1>
        <p>No user exists with that username, kindly check for the case sensitive spelling, if the issue persist, there maybe a fault at leetcode API response, so you may check later.</p>
    </Fail>
  )
}

export default Failed