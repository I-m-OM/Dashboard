import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { useLocation } from 'react-router-dom'
import axios from 'axios'
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import moment from 'moment';
import Button from '../../comp/Button';
import { BiHome } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const Stat = styled.div`
  width: 100%;
  
  .container {
    width: 80%;
    margin: 2rem auto 0 auto;
    font: 600 1.2rem arial;
    
    .grid {
      display: block;
      width: 90%;
      margin: auto;
      padding: 0;
      gap: 1rem;

      .graph {
        padding: 0;
        margin-bottom: 1rem;
        width: 100%;
        // min-height: 20rem;
        // aspect-ratio: 16/16;
        // display: inline-block;
        // justify-content: center;
        align-items: center;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 1rem;
      }

      .data {
        background: rgba(255, 255, 255, 0.8);
        border-radius: 1rem;
        display: flex;
        align-items: center;
        padding: 0;

        .ul {
          margin: auto;
          padding: 0;
          text-align: center;
          list-style: none;
          font: 400 1rem arial;

          li {
            width: 100%;
            margin-bottom: 0.5rem;

            span {
              font: 600 1rem arial;
            }
          }
        }
      }


      .heat {
        width: 90%;
        margin: auto;
        
      }
    }

    .ul-submissions {
      margin: auto;
      width: 90%;
      padding: 0;
      list-style: none;
      font: 400 1rem arial;

      li {
        width: 100%;
        margin-bottom: 0.5rem;

        span {
          font: 600 1rem arial;
        }
      }
    }

    // .problem {
    //   grid-template-columns: 1fr;
    // }

    // .contest {
    //   grid-template-columns: 1fr 1fr;
    // }
  }
    
  @media only screen and (max-width: 1000px) {

    .container {
      width: 95%;

      .grid {
        width: 95%;
      }

    //   .problem {
    //     grid-template-columns: 1fr;
    //   }

    //   .contest {
    //     grid-template-columns: 1fr;
    //   }
    }

  }
`

function Statscf(props) {
  const userName = props.user;
//   console.log(userName);
  
  let uniqueProblems = {}
  let ratings = {}
  let submissionCalendar = {}
  let successLang = {}
  let tag = {}

  const [mother, setMother] = useState({
    "status": "OK",
    "result": [
        {
            "id": 265146244,
            "contestId": 1845,
            "creationTimeSeconds": 1718084245,
            "relativeTimeSeconds": 2147483647,
            "problem": {
                "contestId": 1845,
                "index": "C",
                "name": "Strong Password",
                "type": "PROGRAMMING",
                "rating": 1400,
                "tags": [
                    "binary search",
                    "dp",
                    "greedy",
                    "strings"
                ]
            },
            "author": {
                "contestId": 1845,
                "members": [
                    {
                        "handle": "I.m.OM"
                    }
                ],
                "participantType": "PRACTICE",
                "ghost": false,
                "startTimeSeconds": 1688049300
            },
            "programmingLanguage": "C++17 (GCC 7-32)",
            "verdict": "OK",
            "testset": "TESTS",
            "passedTestCount": 29,
            "timeConsumedMillis": 77,
            "memoryConsumedBytes": 4198400
        },
        {
            "id": 265142508,
            "contestId": 489,
            "creationTimeSeconds": 1718081518,
            "relativeTimeSeconds": 2147483647,
            "problem": {
                "contestId": 489,
                "index": "C",
                "name": "Given Length and Sum of Digits...",
                "type": "PROGRAMMING",
                "points": 1500.0,
                "rating": 1400,
                "tags": [
                    "dp",
                    "greedy",
                    "implementation"
                ]
            },
            "author": {
                "contestId": 489,
                "members": [
                    {
                        "handle": "I.m.OM"
                    }
                ],
                "participantType": "PRACTICE",
                "ghost": false,
                "startTimeSeconds": 1416238500
            },
            "programmingLanguage": "C++17 (GCC 7-32)",
            "verdict": "OK",
            "testset": "TESTS",
            "passedTestCount": 65,
            "timeConsumedMillis": 62,
            "memoryConsumedBytes": 4198400
        },
        {
            "id": 265139306,
            "contestId": 489,
            "creationTimeSeconds": 1718078649,
            "relativeTimeSeconds": 2147483647,
            "problem": {
                "contestId": 489,
                "index": "C",
                "name": "Given Length and Sum of Digits...",
                "type": "PROGRAMMING",
                "points": 1500.0,
                "rating": 1400,
                "tags": [
                    "dp",
                    "greedy",
                    "implementation"
                ]
            },
            "author": {
                "contestId": 489,
                "members": [
                    {
                        "handle": "I.m.OM"
                    }
                ],
                "participantType": "PRACTICE",
                "ghost": false,
                "startTimeSeconds": 1416238500
            },
            "programmingLanguage": "C++17 (GCC 7-32)",
            "verdict": "WRONG_ANSWER",
            "testset": "TESTS",
            "passedTestCount": 4,
            "timeConsumedMillis": 46,
            "memoryConsumedBytes": 0
        },
        {
            "id": 264290247,
            "contestId": 1886,
            "creationTimeSeconds": 1717603807,
            "relativeTimeSeconds": 2147483647,
            "problem": {
                "contestId": 1886,
                "index": "C",
                "name": "Decreasing String",
                "type": "PROGRAMMING",
                "rating": 1600,
                "tags": [
                    "implementation",
                    "strings"
                ]
            },
            "author": {
                "contestId": 1886,
                "members": [
                    {
                        "handle": "I.m.OM"
                    }
                ],
                "participantType": "PRACTICE",
                "ghost": false,
                "startTimeSeconds": 1696862100
            },
            "programmingLanguage": "C++17 (GCC 7-32)",
            "verdict": "WRONG_ANSWER",
            "testset": "TESTS",
            "passedTestCount": 1,
            "timeConsumedMillis": 31,
            "memoryConsumedBytes": 0
        },
        {
            "id": 264289787,
            "contestId": 1886,
            "creationTimeSeconds": 1717603528,
            "relativeTimeSeconds": 2147483647,
            "problem": {
                "contestId": 1886,
                "index": "C",
                "name": "Decreasing String",
                "type": "PROGRAMMING",
                "rating": 1600,
                "tags": [
                    "implementation",
                    "strings"
                ]
            },
            "author": {
                "contestId": 1886,
                "members": [
                    {
                        "handle": "I.m.OM"
                    }
                ],
                "participantType": "PRACTICE",
                "ghost": false,
                "startTimeSeconds": 1696862100
            },
            "programmingLanguage": "C++17 (GCC 7-32)",
            "verdict": "WRONG_ANSWER",
            "testset": "TESTS",
            "passedTestCount": 1,
            "timeConsumedMillis": 93,
            "memoryConsumedBytes": 0
        },
        {
            "id": 264286468,
            "contestId": 1886,
            "creationTimeSeconds": 1717601630,
            "relativeTimeSeconds": 2147483647,
            "problem": {
                "contestId": 1886,
                "index": "C",
                "name": "Decreasing String",
                "type": "PROGRAMMING",
                "rating": 1600,
                "tags": [
                    "implementation",
                    "strings"
                ]
            },
            "author": {
                "contestId": 1886,
                "members": [
                    {
                        "handle": "I.m.OM"
                    }
                ],
                "participantType": "PRACTICE",
                "ghost": false,
                "startTimeSeconds": 1696862100
            },
            "programmingLanguage": "C++17 (GCC 7-32)",
            "verdict": "WRONG_ANSWER",
            "testset": "TESTS",
            "passedTestCount": 1,
            "timeConsumedMillis": 46,
            "memoryConsumedBytes": 0
        },
        {
            "id": 264283240,
            "contestId": 1907,
            "creationTimeSeconds": 1717599797,
            "relativeTimeSeconds": 2147483647,
            "problem": {
                "contestId": 1907,
                "index": "E",
                "name": "Good Triples",
                "type": "PROGRAMMING",
                "rating": 1600,
                "tags": [
                    "brute force",
                    "combinatorics",
                    "number theory"
                ]
            },
            "author": {
                "contestId": 1907,
                "members": [
                    {
                        "handle": "I.m.OM"
                    }
                ],
                "participantType": "PRACTICE",
                "ghost": false,
                "startTimeSeconds": 1701787500
            },
            "programmingLanguage": "C++17 (GCC 7-32)",
            "verdict": "OK",
            "testset": "TESTS",
            "passedTestCount": 9,
            "timeConsumedMillis": 46,
            "memoryConsumedBytes": 0
        },
        {
            "id": 264257885,
            "contestId": 126,
            "creationTimeSeconds": 1717589799,
            "relativeTimeSeconds": 2147483647,
            "problem": {
                "contestId": 126,
                "index": "B",
                "name": "Password",
                "type": "PROGRAMMING",
                "points": 1000.0,
                "rating": 1700,
                "tags": [
                    "binary search",
                    "dp",
                    "hashing",
                    "string suffix structures",
                    "strings"
                ]
            },
            "author": {
                "contestId": 126,
                "members": [
                    {
                        "handle": "I.m.OM"
                    }
                ],
                "participantType": "PRACTICE",
                "ghost": false,
                "startTimeSeconds": 1320858000
            },
            "programmingLanguage": "C++17 (GCC 7-32)",
            "verdict": "OK",
            "testset": "TESTS",
            "passedTestCount": 97,
            "timeConsumedMillis": 154,
            "memoryConsumedBytes": 2969600
        },
        {
            "id": 264124055,
            "contestId": 1920,
            "creationTimeSeconds": 1717502003,
            "relativeTimeSeconds": 2147483647,
            "problem": {
                "contestId": 1920,
                "index": "C",
                "name": "Partitioning the Array",
                "type": "PROGRAMMING",
                "points": 1500.0,
                "rating": 1600,
                "tags": [
                    "brute force",
                    "math",
                    "number theory"
                ]
            },
            "author": {
                "contestId": 1920,
                "members": [
                    {
                        "handle": "I.m.OM"
                    }
                ],
                "participantType": "PRACTICE",
                "ghost": false,
                "startTimeSeconds": 1705156500
            },
            "programmingLanguage": "C++17 (GCC 7-32)",
            "verdict": "OK",
            "testset": "TESTS",
            "passedTestCount": 25,
            "timeConsumedMillis": 186,
            "memoryConsumedBytes": 0
        }
    ]
  });
  const [contest, setContest] = useState({
    "status": "OK",
    "result": [
        {
            "contestId": 1834,
            "contestName": "Codeforces Round 879 (Div. 2)",
            "handle": "I.m.OM",
            "rank": 9653,
            "ratingUpdateTimeSeconds": 1687082700,
            "oldRating": 0,
            "newRating": 356
        },
        {
            "contestId": 1921,
            "contestName": "Codeforces Round 920 (Div. 3)",
            "handle": "I.m.OM",
            "rank": 9765,
            "ratingUpdateTimeSeconds": 1705337400,
            "oldRating": 356,
            "newRating": 668
        },
        {
            "contestId": 1948,
            "contestName": "Educational Codeforces Round 163 (Rated for Div. 2)",
            "handle": "I.m.OM",
            "rank": 4440,
            "ratingUpdateTimeSeconds": 1710520500,
            "oldRating": 668,
            "newRating": 977
        }
    ]
});

  const today = new Date();
  const prior = today - 31536000000/2;

  
  mother.result.map((e) => {
    if (e.verdict === "OK") {
      uniqueProblems[e.problem.name] = e
      successLang[e.programmingLanguage] = successLang[e.programmingLanguage] ? (successLang[e.programmingLanguage]+1) : 1; 
    }

    if (e.creationTimeSeconds*1000 > prior) submissionCalendar[moment(new Date(e.creationTimeSeconds*1000)).format('YYYY-MM-DD')] = submissionCalendar[moment(new Date(e.creationTimeSeconds*1000)).format('YYYY-MM-DD')] ? (submissionCalendar[moment(new Date(e.creationTimeSeconds*1000)).format('YYYY-MM-DD')] + 1) : 1;
  })

  Object.keys(uniqueProblems).map(function(keyName, keyIndex) {
    ratings[uniqueProblems[keyName].problem.rating] = ratings[uniqueProblems[keyName].problem.rating] ? (ratings[uniqueProblems[keyName].problem.rating]+1) : 1;
    uniqueProblems[keyName].problem.tags.map(e => {tag[e] = tag[e] ? (tag[e] + 1) : 1})  
  })

//   console.log(tag)

  const arr = [] 
  Object.keys(submissionCalendar).map(function(keyName, keyIndex) {
    arr.push({date: keyName, count: submissionCalendar[keyName]})
  })
  
  useEffect(() => {
    axios
      .get(`https://codeforces.com/api/user.status?handle=${userName}`)
      .then((res) => {
        setMother(res.data)
      })
      .catch((e) => {
        console.log(e)
      });
    axios
      .get(`https://codeforces.com/api/user.rating?handle=${userName}`)
      .then((res) => {
        setContest(res.data)
      })
      .catch((e) => {
        console.log(e)
      });
  }, []);


  return (
    <Stat>
      <div className="container">
        <h3>Problem & Lang - </h3>
        <div className="grid problem">
          <div className="graph">
            <Chart
              options={{
                chart: {
                  redrawOnParentResize: true,
                  redrawOnWindowResize: true,
                },
                xaxis: {
                  categories: Object.keys(ratings).map(function(e, i) {return e})
                },
                title: {
                  text: 'Problems -',
                  align: 'left'
                },
                theme: {
                  monochrome: {
                    enabled: true,
                    color: '#4c65a3',
                    shadeTo: 'light',
                    shadeIntensity: 0.9
                  }
                },
              }}
              series={[{name: "Solved", data: Object.keys(ratings).map(function(e, i) {return ratings[e]})}]}
              type="bar"
              width="100%"
              height="400"
            />
          </div>
          <div className="graph">
            <Chart
              options={{
                chart: {
                  redrawOnParentResize: true,
                  redrawOnWindowResize: true,
                },
                labels: Object.keys(successLang).map(function(e, i) {return e}),
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  // show: false,
                  width:1
                },
                title: {
                  text: 'Advance -',
                  align: 'left'
                },
                theme: {
                  monochrome: {
                    enabled: true,
                    color: '#f54335',
                    shadeTo: 'light',
                    shadeIntensity: 0.9
                  }
                },
              }}
              series={Object.keys(successLang).map(function(e, i) {return successLang[e]})}
              type="donut"
              width="100%"
            />
          </div>
          
        </div>
      </div>
        
      <div className="container">
        <h3>Topics - </h3>
        <div className="grid problem">
          <div className="graph">
            {/* <h1 style={{width: "100%"}}>hello</h1> */}
            <Chart
              options={{
                chart: {
                  redrawOnParentResize: true,
                  redrawOnWindowResize: true,
                },
                labels: Object.keys(tag).map(function(e, i) {return e.substr(0, 12)}),
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  // show: false,
                  width:1
                },
                title: {
                  text: 'Advance -',
                  align: 'left'
                },
                theme: {
                  monochrome: {
                    enabled: true,
                    color: '#fec007',
                    shadeTo: 'light',
                    shadeIntensity: 0.9
                  }
                },
              }}
              series={Object.keys(tag).map(function(e, i) {return tag[e]})}
              type="pie"
              width="100%"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <h3>Contest Stats - </h3>
        <div className="grid problem">
          <div className="graph">
            
            <Chart
              options={{
                chart: {
                  redrawOnParentResize: true,
                  redrawOnWindowResize: true,
                },
                  theme: {
                    monochrome: {
                      enabled: true,
                      color: '#016401',
                      shadeTo: 'light',
                      shadeIntensity: 0.9
                    }
                  },
                  redrawOnParentResize: true,
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'straight'
                  },
                  
                  title: {
                    text: 'Rating -',
                    align: 'left'
                  },
                  xaxis: {
                    labels: {
                      show: false,
                    }
                  }
                }
              }
              series={[
                {
                  name: "rating", 
                  data: contest.result.map((e) => e.newRating)
                }
              ]}
              type="area"
              width="100%"
            />
          </div>
          <div className="data">
            <ul className='ul'>
              <li>Attended: <span>{contest.result.length}</span></li>
              <li>Rating: <span>{Math.trunc(contest.result[contest.result.length-1].newRating)}</span></li>
              {/* <li>Ranking: <span>{contest.contestGlobalRanking}</span></li>
              <li>Top: <span>{contest.contestTopPercentage}%</span></li> */}
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <h3>Submissions (last 6 months) - </h3>
        <div className="grid">
          <CalendarHeatmap
            startDate={moment(prior).format('YYYY-MM-DD')}
            endDate={moment(today).format('YYYY-MM-DD')}
            showMonthLabels={false}
            classForValue	={(value) => {
              if (!value) {
                return "color-gitlab-0";
              } else if (value.count < 8) {
                return `color-gitlab-1`;
              } else if (value.count < 16) {
                return `color-gitlab-2`;
              } else if (value.count < 24) {
                return `color-gitlab-3`;
              } else {
                return `color-gitlab-4`;
              }
            }}
            values={arr}
          />
        </div>
      </div>

      <div className="container">
        <h3>Latest Accepted Submissionns - </h3>
        <ul className='ul-submissions'>
          {
            Object.keys(uniqueProblems).map(function(keyName, keyIndex) {
              if (keyIndex < 10) return <li>{keyName} - &nbsp; <span>{uniqueProblems[keyName].programmingLanguage}</span></li>
            })
          }
        </ul>
        <br /><br />
        <center>
        <NavLink to="/" >
          <Button
            logo={<BiHome />}
            lcolor="#f54335"
            data="back to"
            data2="HOME"
            bg="rgba(255, 255, 255, 0.3)"
            color="#000"
            color2="#4c65a3"
            border="#2196f3"
          />
        </NavLink>
        </center>
      </div>
      

    </Stat>
  )
}

export default Statscf