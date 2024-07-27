import { useEffect, useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Failed from '../comp/Failed'
import {  FaLocationDot, FaStar } from 'react-icons/fa6'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { IoIosGlobe } from 'react-icons/io'
import Statslc from './Leet/Statslc'
import Loading from '../comp/Loading'


  const Ldiv = styled.div`
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    height: 100vh;
    background: linear-gradient(to right, #c9d6ff, #e2e2e2);

    .grid-container {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr 3fr;

      .left-child {
        color: #eee;
        height: 110%;
        background: rgba(0,0,0,0.7);

        .container {
          position: sticky;
          top: 0;
        }

        img {
          width: 50%;
          margin: 8rem 25% 0 25%;
          border-radius: 50%;
        }

        h1 {
          color: #eca72d;
          text-align: center;
          text-transform: uppercase;
        }

        ul {
          margin: auto;
          padding: 0;
          width: 70%;
          list-style: none;
          list-spacing: 1rem;
        
          li {
            margin: 1rem 0 0 0;
            padding: 0;
            font: 500 0.8rem arial;
            letter-spacing: 0.15rem;
            text-align: center;

            .links {
              font-size: 1.3rem;
              letter-spacing: 1rem;
              text-decoration: none;
              cursor: pointer;

              a:link, a:visited {
                color: #eee;
              }

              a:active, a:hover {
                color: #ccc;
              }
            }
          }
        }
      }
    }
    
    @media only screen and (max-width: 700px) {
    
      .grid-container {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 1fr;

        .left-child {
          color: #eee;
          height: 55rem;
          }
        }
      }
    }
  }
  `

function Leetcode() {
  const userName = useLocation().state;
  const [user, setUser] = useState({
    "username": "I_m_OM",
    "name": "Om Chaudhary",
    "birthday": "11/16/2003",
    "avatar": "https://assets.leetcode.com/users/I_m_OM/avatar_1708970139.png",
    "ranking": 81154,
    "reputation": 4,
    "gitHub": "https://github.com/I-m-OM",
    "twitter": "https://twitter.com/ImOM_1611",
    "linkedIN": "https://linkedin.com/in/om-chaudhary-921a691b6",
    "website": [
        "om-chaudhary.netlify.app"
    ],
    "country": "India",
    "company": null,
    "school": null,
    "skillTags": [],
    "about": "I am a student of IIT Jammu, EE '26 batch. CP is my hobby."
});
  const [readyForRender, setReadyForRender] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    axios
      .get(`https://alfa-leetcode-api.onrender.com/${userName}/`)
      .then((res) => {
        setUser(res.data)
        if (res.data.errors == null) {
          setReadyForRender(true); 
        } else {
          setFailed(true);
        }
      })
      .catch((e) => {
        console.log(e)
      });
  }, []);


  if (readyForRender) {
    return (
      <Ldiv>
        <div className="grid-container">
          <div className="left-child">
            <div className="container">
              <img src={user.avatar} alt="profile pic" />
              <h1>{user.name}</h1>
              <ul>
                <li>{user.username}</li>
                <li>Ranking : {user.ranking}</li>
                <li>Reputation : <FaStar /> {user.reputation}</li>
                <li><FaLocationDot /> {user.country}</li>
                <li>{user.about}</li>
                <li><span className="links"><a href={user.website[0]}><IoIosGlobe /></a> <a href={user.gitHub}><SiGithub /></a> <a href={user.linkedIN}><SiLinkedin /></a></span></li>
              </ul>
            </div>
          </div>
          <div className="right-child">
            <Statslc user={userName}/>
          </div>
        </div>
      </Ldiv>
    )
  } else {
    if (failed) {
      return <Failed />;
    } else {
      return <Loading />;
    }
  }
}

export default Leetcode