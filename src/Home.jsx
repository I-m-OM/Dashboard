import { SiCodeforces, SiLeetcode } from "react-icons/si";
import Button from "./comp/Button";
import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


  const Div = styled.div`
    height: 100vh;
    background: linear-gradient(to right, #c9d6ff, #e2e2e2);
    overflow-x: hidden;

    h1 {
      text-align: center;
      font: 700 2rem arial;
      height: 10rem;
      margin-top: 10rem;
    }

    form {

      input {
        width: 40%;
        margin: auto;
        height: 3rem;
        background: rgba(255, 255, 255, 0);
        border: 0.1rem solid #333;
        border-radius: 1rem;
        font: 1.5rem helvetica;
      }
    }

    .button-container {
      gap: 5rem;
      display: flex;
      justify-content: center;
      margin: 5rem auto;
      height: 10rem;
    }

    .info {
      margin-top: 5rem;
      text-align: center;
    }

    @media only screen and (max-width: 700px) {
    
      .button-container {
        gap: 2rem;
        display: block;
      }

      form {

        input {
          width: 80%;
          margin: auto;
          height: 3rem;
        }
      }
    }
  `

function Home() {

  const [userName, setUserName] = useState("");

  return (
    <Div>
      <h1>Select a Dashboard - </h1>
    <form>
      <center>
        <input type="text" placeholder="Enter Handle - " 
          onChange={(e) => setUserName(e.target.value)} 
          value = {userName}
      name="userName"/>
      </center>
    </form>
      <div className="button-container">
        <NavLink to="/Leetcode" state={userName} >
          <Button
            logo={<SiLeetcode />}
            lcolor="#eca72d"
            data="Leet"
            data2="Code"
            bg="rgba(255, 255, 255, 0.3)"
            color="#000"
            color2="#eca72d"
            border="#eca72d"
          />
        </NavLink>
        <NavLink to="/Codeforces" state={userName} >
          <Button
            logo={<SiCodeforces />}
            lcolor="#f54335"
            data="Code"
            data2="Forces"
            bg="rgba(255, 255, 255, 0.3)"
            color="#000"
            color2="#4c65a3"
            border="#2196f3"
          />
        </NavLink>
      </div>
      <div className="info">Designed & Developed by Om Chaudhary</div>
    </Div>
  );
}

export default Home;