import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { useLocation } from 'react-router-dom'
import axios from 'axios'
import ApexCharts from 'apexcharts'
import Chart from "react-apexcharts";
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import moment from 'moment';

const Stat = styled.div`
  width: 100%;
  
  .container {
    width: 80%;
    margin: 2rem auto 0 auto;
    font: 600 1.2rem arial;
    
    .grid {
      display: grid;
      width: 90%;
      margin: auto;
      padding: 0;
      gap: 1rem;

      .graph {
        padding: 0;
        width: 100%;
        aspect-ratio: 16/16;
        display: flex;
        justify-content: center;
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

    .problem {
      grid-template-columns: 1fr 1fr;
    }

    .contest {
      grid-template-columns: 2fr 1fr;
    }
  }
    
  @media only screen and (max-width: 1000px) {

    .container {
      width: 95%;

      .grid {
        width: 95%;
      }

      .problem {
        grid-template-columns: 1fr;
      }

      .contest {
        grid-template-columns: 1fr;
      }
    }

  }
`

function Statslc(props) {
  const userName = props.user;
  console.log(userName);
  
  const [solve, setSolve] = useState({
    "solvedProblem": 555,
    "easySolved": 93,
    "mediumSolved": 398,
    "hardSolved": 64,
    "totalSubmissionNum": [
        {
            "difficulty": "All",
            "count": 604,
            "submissions": 1449
        },
        {
            "difficulty": "Easy",
            "count": 93,
            "submissions": 188
        },
        {
            "difficulty": "Medium",
            "count": 437,
            "submissions": 1004
        },
        {
            "difficulty": "Hard",
            "count": 74,
            "submissions": 257
        }
      ],
      "acSubmissionNum": [
          {
              "difficulty": "All",
              "count": 555,
              "submissions": 765
          },
          {
              "difficulty": "Easy",
              "count": 93,
              "submissions": 151
          },
          {
              "difficulty": "Medium",
              "count": 398,
              "submissions": 527
          },
          {
              "difficulty": "Hard",
              "count": 64,
              "submissions": 87
          }
        ]
  });
  const [skill, setSkill] = useState({
            "tagProblemCounts": {
                "advanced": [
                    {
                        "tagName": "Data Stream",
                        "tagSlug": "data-stream",
                        "problemsSolved": 1
                    },
                    {
                        "tagName": "Game Theory",
                        "tagSlug": "game-theory",
                        "problemsSolved": 2
                    },
                    {
                        "tagName": "Rolling Hash",
                        "tagSlug": "rolling-hash",
                        "problemsSolved": 7
                    },
                    {
                        "tagName": "Backtracking",
                        "tagSlug": "backtracking",
                        "problemsSolved": 20
                    },
                    {
                        "tagName": "Bitmask",
                        "tagSlug": "bitmask",
                        "problemsSolved": 1
                    },
                    {
                        "tagName": "Quickselect",
                        "tagSlug": "quickselect",
                        "problemsSolved": 2
                    },
                    {
                        "tagName": "Dynamic Programming",
                        "tagSlug": "dynamic-programming",
                        "problemsSolved": 86
                    },
                    {
                        "tagName": "Divide and Conquer",
                        "tagSlug": "divide-and-conquer",
                        "problemsSolved": 10
                    },
                    {
                        "tagName": "Trie",
                        "tagSlug": "trie",
                        "problemsSolved": 8
                    },
                    {
                        "tagName": "Union Find",
                        "tagSlug": "union-find",
                        "problemsSolved": 11
                    },
                    {
                        "tagName": "Binary Indexed Tree",
                        "tagSlug": "binary-indexed-tree",
                        "problemsSolved": 1
                    },
                    {
                        "tagName": "Segment Tree",
                        "tagSlug": "segment-tree",
                        "problemsSolved": 2
                    },
                    {
                        "tagName": "Monotonic Stack",
                        "tagSlug": "monotonic-stack",
                        "problemsSolved": 10
                    },
                    {
                        "tagName": "Monotonic Queue",
                        "tagSlug": "monotonic-queue",
                        "problemsSolved": 2
                    },
                    {
                        "tagName": "Topological Sort",
                        "tagSlug": "topological-sort",
                        "problemsSolved": 6
                    },
                    {
                        "tagName": "Shortest Path",
                        "tagSlug": "shortest-path",
                        "problemsSolved": 1
                    }
                ],
                "intermediate": [
                    {
                        "tagName": "Tree",
                        "tagSlug": "tree",
                        "problemsSolved": 57
                    },
                    {
                        "tagName": "Binary Tree",
                        "tagSlug": "binary-tree",
                        "problemsSolved": 53
                    },
                    {
                        "tagName": "Hash Table",
                        "tagSlug": "hash-table",
                        "problemsSolved": 129
                    },
                    {
                        "tagName": "Graph",
                        "tagSlug": "graph",
                        "problemsSolved": 18
                    },
                    {
                        "tagName": "Greedy",
                        "tagSlug": "greedy",
                        "problemsSolved": 89
                    },
                    {
                        "tagName": "Binary Search",
                        "tagSlug": "binary-search",
                        "problemsSolved": 45
                    },
                    {
                        "tagName": "Depth-First Search",
                        "tagSlug": "depth-first-search",
                        "problemsSolved": 70
                    },
                    {
                        "tagName": "Breadth-First Search",
                        "tagSlug": "breadth-first-search",
                        "problemsSolved": 47
                    },
                    {
                        "tagName": "Recursion",
                        "tagSlug": "recursion",
                        "problemsSolved": 16
                    },
                    {
                        "tagName": "Sliding Window",
                        "tagSlug": "sliding-window",
                        "problemsSolved": 33
                    },
                    {
                        "tagName": "Bit Manipulation",
                        "tagSlug": "bit-manipulation",
                        "problemsSolved": 42
                    },
                    {
                        "tagName": "Math",
                        "tagSlug": "math",
                        "problemsSolved": 87
                    },
                    {
                        "tagName": "Randomized",
                        "tagSlug": "randomized",
                        "problemsSolved": 1
                    },
                    {
                        "tagName": "Design",
                        "tagSlug": "design",
                        "problemsSolved": 9
                    },
                    {
                        "tagName": "Brainteaser",
                        "tagSlug": "brainteaser",
                        "problemsSolved": 8
                    },
                    {
                        "tagName": "Database",
                        "tagSlug": "database",
                        "problemsSolved": 3
                    }
                ],
                "fundamental": [
                    {
                        "tagName": "Array",
                        "tagSlug": "array",
                        "problemsSolved": 304
                    },
                    {
                        "tagName": "Matrix",
                        "tagSlug": "matrix",
                        "problemsSolved": 42
                    },
                    {
                        "tagName": "String",
                        "tagSlug": "string",
                        "problemsSolved": 129
                    },
                    {
                        "tagName": "Simulation",
                        "tagSlug": "simulation",
                        "problemsSolved": 23
                    },
                    {
                        "tagName": "Enumeration",
                        "tagSlug": "enumeration",
                        "problemsSolved": 8
                    },
                    {
                        "tagName": "Sorting",
                        "tagSlug": "sorting",
                        "problemsSolved": 99
                    },
                    {
                        "tagName": "Stack",
                        "tagSlug": "stack",
                        "problemsSolved": 29
                    },
                    {
                        "tagName": "Queue",
                        "tagSlug": "queue",
                        "problemsSolved": 8
                    },
                    {
                        "tagName": "Linked List",
                        "tagSlug": "linked-list",
                        "problemsSolved": 27
                    },
                    {
                        "tagName": "Two Pointers",
                        "tagSlug": "two-pointers",
                        "problemsSolved": 68
                    }
                ]
            }
  });
  const [lang, setLang] = useState({
    "languageProblemCount": [
        {
            "languageName": "C++",
            "problemsSolved": 553
        },
        {
            "languageName": "Java",
            "problemsSolved": 1
        },
        {
            "languageName": "MySQL",
            "problemsSolved": 3
        },
        {
            "languageName": "Python3",
            "problemsSolved": 1
        }
    ]
  });
  const [contest, setContest] = useState({
    "contestAttend": 2,
    "contestRating": 1521.041,
    "contestGlobalRanking": 205121,
    "totalParticipants": 563365,
    "contestTopPercentage": 37.04,
    "contestBadges": null,
    "contestParticipation": [
        {
            "attended": true,
            "rating": 1429.665,
            "ranking": 16176,
            "trendDirection": "DOWN",
            "problemsSolved": 1,
            "totalProblems": 4,
            "finishTimeInSeconds": 4308,
            "contest": {
                "title": "Biweekly Contest 106",
                "startTime": 1686407400
            }
        },
        {
            "attended": true,
            "rating": 1521.041,
            "ranking": 4161,
            "trendDirection": "UP",
            "problemsSolved": 3,
            "totalProblems": 4,
            "finishTimeInSeconds": 5617,
            "contest": {
                "title": "Biweekly Contest 122",
                "startTime": 1705761000
            }
        }
    ]
  });
  const [submission, setSubmission] = useState({
      "totalSolved": 555,
      "totalSubmissions": [
          {
              "difficulty": "All",
              "count": 604,
              "submissions": 1449
          },
          {
              "difficulty": "Easy",
              "count": 93,
              "submissions": 188
          },
          {
              "difficulty": "Medium",
              "count": 437,
              "submissions": 1004
          },
          {
              "difficulty": "Hard",
              "count": 74,
              "submissions": 257
          }
      ],
      "totalQuestions": 3231,
      "easySolved": 93,
      "totalEasy": 813,
      "mediumSolved": 398,
      "totalMedium": 1697,
      "hardSolved": 64,
      "totalHard": 721,
      "ranking": 81836,
      "contributionPoint": 2524,
      "reputation": 4,
      "submissionCalendar": {
          "1697846400": 7,
          "1697932800": 11,
          "1699833600": 21,
          "1702166400": 3,
          "1702252800": 24,
          "1702425600": 3,
          "1702684800": 11,
          "1702771200": 10,
          "1702857600": 7,
          "1703548800": 5,
          "1703635200": 3,
          "1703721600": 8,
          "1703808000": 32,
          "1703894400": 22,
          "1703980800": 12,
          "1704067200": 5,
          "1704240000": 10,
          "1704326400": 13,
          "1704412800": 9,
          "1704499200": 18,
          "1704585600": 20,
          "1704672000": 15,
          "1704758400": 10,
          "1704844800": 13,
          "1704931200": 13,
          "1705017600": 14,
          "1705104000": 9,
          "1705190400": 20,
          "1705276800": 7,
          "1705363200": 8,
          "1705449600": 11,
          "1705536000": 3,
          "1705622400": 14,
          "1705708800": 9,
          "1705795200": 10,
          "1705881600": 8,
          "1705968000": 18,
          "1706054400": 8,
          "1706140800": 11,
          "1706227200": 16,
          "1706313600": 6,
          "1706400000": 14,
          "1706486400": 10,
          "1706572800": 13,
          "1706659200": 13,
          "1706745600": 11,
          "1706832000": 8,
          "1706918400": 6,
          "1707004800": 27,
          "1707091200": 9,
          "1707177600": 7,
          "1707264000": 15,
          "1707350400": 9,
          "1707436800": 12,
          "1707523200": 11,
          "1707609600": 19,
          "1707696000": 23,
          "1707782400": 19,
          "1707868800": 9,
          "1707955200": 7,
          "1708041600": 22,
          "1708128000": 12,
          "1708214400": 20,
          "1708300800": 17,
          "1708387200": 17,
          "1708473600": 18,
          "1708560000": 13,
          "1708646400": 13,
          "1708732800": 19,
          "1708819200": 1,
          "1708905600": 17,
          "1708992000": 2,
          "1709078400": 3,
          "1709164800": 18,
          "1709251200": 15,
          "1709337600": 8,
          "1709424000": 12,
          "1709510400": 9,
          "1709596800": 16,
          "1709683200": 9,
          "1709769600": 11,
          "1709856000": 6,
          "1709942400": 9,
          "1710028800": 20,
          "1710115200": 15,
          "1710201600": 9,
          "1710288000": 7,
          "1710374400": 8,
          "1710460800": 10,
          "1710547200": 1,
          "1710633600": 16,
          "1710720000": 29,
          "1710806400": 7,
          "1710892800": 1,
          "1710979200": 8,
          "1711065600": 1,
          "1711152000": 1,
          "1711238400": 1,
          "1711324800": 1,
          "1711411200": 1,
          "1711497600": 1,
          "1711584000": 1,
          "1711670400": 2,
          "1711756800": 5,
          "1711843200": 4,
          "1711929600": 1,
          "1712016000": 2,
          "1712102400": 3,
          "1712188800": 2,
          "1712275200": 3,
          "1712361600": 9,
          "1712448000": 5,
          "1712534400": 15,
          "1712620800": 3,
          "1712707200": 4,
          "1712793600": 3,
          "1712880000": 1,
          "1712966400": 1,
          "1713052800": 1,
          "1713139200": 3,
          "1713225600": 1,
          "1713312000": 1,
          "1713398400": 1,
          "1713484800": 2,
          "1713571200": 2,
          "1713657600": 1,
          "1713744000": 2,
          "1713830400": 6,
          "1713916800": 2,
          "1714003200": 3,
          "1714089600": 1,
          "1714176000": 1,
          "1714262400": 1,
          "1714348800": 2,
          "1714435200": 1,
          "1714521600": 1,
          "1714608000": 1,
          "1714694400": 1,
          "1714780800": 1,
          "1714867200": 1,
          "1714953600": 1,
          "1715212800": 5,
          "1715299200": 8,
          "1715385600": 2,
          "1715472000": 7,
          "1715558400": 1,
          "1715644800": 6,
          "1715731200": 17,
          "1715817600": 9,
          "1715904000": 6,
          "1716076800": 4,
          "1716163200": 3,
          "1716249600": 2,
          "1716336000": 9,
          "1716508800": 5,
          "1716595200": 8,
          "1716768000": 2,
          "1716854400": 3,
          "1716940800": 10,
          "1717027200": 3,
          "1717113600": 2,
          "1717200000": 1,
          "1717286400": 5,
          "1717372800": 5,
          "1717459200": 7,
          "1717545600": 2,
          "1717632000": 7,
          "1717804800": 7,
          "1717891200": 2,
          "1717977600": 8,
          "1718064000": 2,
          "1718150400": 14,
          "1718236800": 4,
          "1718409600": 5,
          "1718496000": 3,
          "1718582400": 1,
          "1718668800": 3,
          "1718755200": 1,
          "1718841600": 4,
          "1718928000": 1,
          "1719014400": 1,
          "1719360000": 1,
          "1719446400": 1,
          "1719964800": 3,
          "1721001600": 2
      },
      "recentSubmissions": [
          {
              "title": "Robot Collisions",
              "titleSlug": "robot-collisions",
              "timestamp": "1721037485",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Robot Collisions",
              "titleSlug": "robot-collisions",
              "timestamp": "1721035690",
              "statusDisplay": "Runtime Error",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Maximum Total Importance of Roads",
              "titleSlug": "maximum-total-importance-of-roads",
              "timestamp": "1720028247",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Minimum Difference Between Largest and Smallest Value in Three Moves",
              "titleSlug": "minimum-difference-between-largest-and-smallest-value-in-three-moves",
              "timestamp": "1720028219",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Maximum Product Difference Between Two Pairs",
              "titleSlug": "maximum-product-difference-between-two-pairs",
              "timestamp": "1720028164",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Find Center of Star Graph",
              "titleSlug": "find-center-of-star-graph",
              "timestamp": "1719482940",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Minimum Number of K Consecutive Bit Flips",
              "titleSlug": "minimum-number-of-k-consecutive-bit-flips",
              "timestamp": "1719421455",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Count Number of Nice Subarrays",
              "titleSlug": "count-number-of-nice-subarrays",
              "timestamp": "1719043575",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Grumpy Bookstore Owner",
              "titleSlug": "grumpy-bookstore-owner",
              "timestamp": "1718948776",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Magnetic Force Between Two Balls",
              "titleSlug": "magnetic-force-between-two-balls",
              "timestamp": "1718884654",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Magnetic Force Between Two Balls",
              "titleSlug": "magnetic-force-between-two-balls",
              "timestamp": "1718884431",
              "statusDisplay": "Wrong Answer",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Magnetic Force Between Two Balls",
              "titleSlug": "magnetic-force-between-two-balls",
              "timestamp": "1718884354",
              "statusDisplay": "Wrong Answer",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Magnetic Force Between Two Balls",
              "titleSlug": "magnetic-force-between-two-balls",
              "timestamp": "1718881608",
              "statusDisplay": "Wrong Answer",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Big Countries",
              "titleSlug": "big-countries",
              "timestamp": "1718797748",
              "statusDisplay": "Accepted",
              "lang": "mysql",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Find Customer Referee",
              "titleSlug": "find-customer-referee",
              "timestamp": "1718712735",
              "statusDisplay": "Accepted",
              "lang": "mysql",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Recyclable and Low Fat Products",
              "titleSlug": "recyclable-and-low-fat-products",
              "timestamp": "1718712351",
              "statusDisplay": "Accepted",
              "lang": "mysql",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Most Profit Assigning Work",
              "titleSlug": "most-profit-assigning-work",
              "timestamp": "1718697769",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Sum of Square Numbers",
              "titleSlug": "sum-of-square-numbers",
              "timestamp": "1718612193",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Patching Array",
              "titleSlug": "patching-array",
              "timestamp": "1718528661",
              "statusDisplay": "Accepted",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          },
          {
              "title": "Patching Array",
              "titleSlug": "patching-array",
              "timestamp": "1718528601",
              "statusDisplay": "Wrong Answer",
              "lang": "cpp",
              "__typename": "SubmissionDumpNode"
          }
      ],
      "matchedUserStats": {
          "acSubmissionNum": [
              {
                  "difficulty": "All",
                  "count": 555,
                  "submissions": 765
              },
              {
                  "difficulty": "Easy",
                  "count": 93,
                  "submissions": 151
              },
              {
                  "difficulty": "Medium",
                  "count": 398,
                  "submissions": 527
              },
              {
                  "difficulty": "Hard",
                  "count": 64,
                  "submissions": 87
              }
          ],
          "totalSubmissionNum": [
              {
                  "difficulty": "All",
                  "count": 604,
                  "submissions": 1449
              },
              {
                  "difficulty": "Easy",
                  "count": 93,
                  "submissions": 188
              },
              {
                  "difficulty": "Medium",
                  "count": 437,
                  "submissions": 1004
              },
              {
                  "difficulty": "Hard",
                  "count": 74,
                  "submissions": 257
              }
          ]
      }
  });

  const today = new Date();
  const prior = today - 31536000000/2;

  const obj = submission.submissionCalendar;
  const arr = []
  Object.keys(obj).map(function(keyName, keyIndex) {
    if (keyName*1000 > prior) arr.push({date: moment(keyName*1000).format('YYYY-MM-DD'), count: obj[keyName]})
  })

  lang.languageProblemCount.sort((a,b) => b.problemsSolved - a.problemsSolved);

  skill.tagProblemCounts.advanced.sort((a,b) => b.problemsSolved - a.problemsSolved);
  skill.tagProblemCounts.intermediate.sort((a,b) => b.problemsSolved - a.problemsSolved);
  skill.tagProblemCounts.fundamental.sort((a,b) => b.problemsSolved - a.problemsSolved);

  
  useEffect(() => {
    axios
      .get(`https://alfa-leetcode-api.onrender.com/skillStats/${userName}`)
      .then((res) => {
        setSkill(res.data.data.matchedUser)
        console.log("fetched skill")
        console.log(skill)
      })
      .catch((e) => {
        console.log(e)
        console.log(skill)
      });
    axios
      .get(`https://alfa-leetcode-api.onrender.com/languageStats?username=${userName}`)
      .then((res) => {
        setLang(res.data.matchedUser)
      })
      .catch((e) => {
        console.log(e)
      });
    axios
      .get(`https://alfa-leetcode-api.onrender.com/${userName}/solved`)
      .then((res) => {
        setSolve(res.data)
      })
      .catch((e) => {
        console.log(e)
      });
    axios
      .get(`https://alfa-leetcode-api.onrender.com/${userName}/contest`)
      .then((res) => {
        setContest(res.data)
      })
      .catch((e) => {
        console.log(e)
      });
    axios
      .get(`https://alfa-leetcode-api.onrender.com/userProfile/${userName}`)
      .then((res) => {
        setSubmission(res.data)
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
                  categories: ["Easy", "Mediun", "Hard"]
                },
                title: {
                  text: 'Problems -',
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
              series={[{name: "Attempted", data: [solve.totalSubmissionNum[1].count, solve.totalSubmissionNum[2].count, solve.totalSubmissionNum[3].count],}, {name: "Solved", data: [solve.acSubmissionNum[1].count, solve.acSubmissionNum[2].count, solve.acSubmissionNum[3].count],}]}
              type="bar"
              width="100%"
            />
          </div>
            
          <div className="graph">
            
            <Chart
              options={{
                chart: {
                  redrawOnParentResize: true,
                  redrawOnWindowResize: true,
                },
                labels: lang.languageProblemCount.map((e) => e.languageName),
                stroke: {
                  // show: false,
                  width:1
                },
                title: {
                  text: 'Langs -',
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
              series={lang.languageProblemCount.map((e) => e.problemsSolved)}
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
            <Chart
              options={{
                chart: {
                  redrawOnParentResize: true,
                  redrawOnWindowResize: true,
                },
                labels: skill.tagProblemCounts.advanced.map((e) => {
                  if (e.tagName.length > 10) { 
                    if (e.tagName.indexOf(" ") === -1) {
                      return e.tagName.substr(0, 10);
                    } else {
                      return e.tagName.trim().split(' ').map(c => c.substr(0, 4)).join(' ')
                    }
                  }
                  else return e.tagName
                }),
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
              series={skill.tagProblemCounts.advanced.map((e) => e.problemsSolved)}
              type="pie"
              width="100%"
            />
          </div>
          <div className="graph">
            <Chart
              options={{
                chart: {
                  redrawOnParentResize: true,
                  redrawOnWindowResize: true,
                },
                labels: skill.tagProblemCounts.intermediate.map((e) => {
                  if (e.tagName.length > 10) { 
                    if (e.tagName.indexOf(" ") === -1) {
                      return e.tagName.substr(0, 12);
                    } else {
                      return e.tagName.trim().split(' ').map(c => c.substr(0, 6)).join(' ')
                    }
                  }
                  else return e.tagName
                }),
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  // show: false,
                  width:1
                },
                title: {
                  text: 'Intermediate -',
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
              series={skill.tagProblemCounts.intermediate.map((e) => e.problemsSolved)}
              type="pie"
              width="100%"
            />
          </div>
          <div className="graph">
            <Chart
              options={{
                chart: {
                  redrawOnParentResize: true,
                  redrawOnWindowResize: true,
                },
                labels: skill.tagProblemCounts.fundamental.map((e) => {
                  if (e.tagName.length > 12) { 
                    if (e.tagName.indexOf(" ") === -1) {
                      return e.tagName.substr(0, 12);
                    } else {
                      return e.tagName.trim().split(' ').map(c => c.substr(0, 6)).join(' ')
                    }
                  }
                  else return e.tagName
                }),
                dataLabels: {
                  enabled: false
                },
                stroke: {
                  // show: false,
                  width:1
                },
                title: {
                  text: 'Fundamental -',
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
              series={skill.tagProblemCounts.fundamental.map((e) => e.problemsSolved)}
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
                      formatter: function (value) {
                        return value;
                      }
                    }
                  }
                }
              }
              series={[
                {
                  name: contest.contestParticipation.map((e) => e.contest.title),
                  data: contest.contestParticipation.map((e) => Math.trunc(e.rating))
                }
              ]}
              type="area"
              width="100%"
            />
          </div>
          <div className="data">
            <ul className='ul'>
              <li>Attended: <span>{contest.contestAttend}</span></li>
              <li>Rating: <span>{Math.trunc(contest.contestRating)}</span></li>
              <li>Ranking: <span>{contest.contestGlobalRanking}</span></li>
              <li>Top: <span>{contest.contestTopPercentage}%</span></li>
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
          {submission.recentSubmissions.map(e => {
            if (e.statusDisplay === "Accepted") {
              return <li>{e.title} <span>{e.lang}</span></li>
            }
          })}
        </ul>
      </div>
    </Stat>
  )
}

export default Statslc