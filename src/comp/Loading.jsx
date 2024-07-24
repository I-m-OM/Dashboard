import React from 'react'
import styled from 'styled-components'

    const Load = styled.div`
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

function Loading() {
  return (
    <Load>
        <h1>Loading the Resources...</h1>
        <p>If it takes longer than expected, then the server might be busy/down at the moment [error - 429 "Too many requests"].</p>
    </Load>
  )
}
export default Loading