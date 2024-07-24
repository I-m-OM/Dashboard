import React from 'react'
import styled from 'styled-components'
import Hr from "./Hr"
import { NavLink } from 'react-router-dom'

    const Nav = styled.ul`
        margin: 0;
        padding: 0;
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font: 600 0.8rem arial;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        list-style: none;
        gap: 2rem;

        a {
            text-decoration: none;
            &:link, &:visited {
                color: #eca72d;
            }
            &:hover, &:active {
                cursor: pointer;
                color: #444;
            }
        }

        li {
            margin-top: 1rem;
        }
    `

function Navlc() {
  return (
    <>
        <Nav>
            <NavLink to="/LeetCode" >
            <li>stats</li>
            </NavLink>
            <NavLink to="/LeetCode/contests" >
            <li>contests</li>
            </NavLink>
            <NavLink to="/LeetCode/problems" >
            <li>problems</li>
            </NavLink>
        </Nav>
        <Hr />
    </>
  )
}

export default Navlc