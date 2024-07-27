import { useEffect, useState } from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Failed from '../comp/Failed'
import {  FaLocationDot, FaStar } from 'react-icons/fa6'
import Statscf from './Code/Statscf'
import Loading from '../comp/Loading'
import moment from 'moment/moment'


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
          color: #f54335;
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

function Codeforces() {
  const userName = useLocation().state;
  const [user, setUser] = useState({
    "lastName": "Chaudhary",
    "country": "India",
    "lastOnlineTimeSeconds": 1721920329,
    "city": "Morādābād",
    "rating": 977,
    "friendOfCount": 8,
    "titlePhoto": "https://userpic.codeforces.org/3167417/title/97e08c8829751c5e.jpg",
    "handle": "I.m.OM",
    "avatar": "https://userpic.codeforces.org/3167417/avatar/4f3acf96b036f4c7.jpg",
    "firstName": "Om",
    "contribution": 0,
    "organization": "IIT Jammu",
    "rank": "newbie",
    "maxRating": 977,
    "registrationTimeSeconds": 1679742305,
    "maxRank": "newbie"
  });
  const [readyForRender, setReadyForRender] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    axios
      .get(`https://codeforces.com/api/user.info?handles=${userName}&checkHistoricHandles=false`)
      .then((res) => {
          setUser(res.data.result[0])
          setTimeout(() => {setReadyForRender(true)}, 4000)
          // setReadyForRender(true)
      })
      .catch((e) => {
        setFailed(true);
        console.log(e)
      });
  }, []);


  if (readyForRender) {
    return (
      <Ldiv>
        <div className="grid-container">
          <div className="left-child">
            <div className="container">
              <img src={user.titlePhoto} alt="profile pic" />
              <h1>{user.firstName} {user.lastName}</h1>
              <ul>
                <li>{user.handle}</li>
                <li>Rating : {user.rating} (max. {user.maxRank}, {user.maxRating})</li>
                <li><FaStar /> Friend Of : {user.friendOfCount}</li>
                <li><FaLocationDot /> {user.city}, {user.country}</li>
                <li>Organisation : {user.organization}</li>
                <li>Last seen : {moment(user.lastOnlineTimeSeconds*1000).format('YYYY/MM/DD')}, Registered : {moment(user.registrationTimeSeconds*1000).format('YYYY/MM/DD')}</li>
              </ul>
            </div>
          </div>
          <div className="right-child">
            <Statscf user={userName}/>
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

export default Codeforces