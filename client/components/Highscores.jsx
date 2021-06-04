import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getHighscoresApi } from '../API/highscoreAPI'

// STYLES
import { StyledHighscores } from './styles/StyledHighscores'

export default function Highscores () {
  const [scores, setScores] = useState([])

  let rank = 1

  useEffect(() => {
    getHighscoresApi()
      .then(res => {
        setScores(res)
        return null
      })
      .catch(err => console.log(err))
  }, [scores])

  return (
    <StyledHighscores>
      <div >
        <h1> High Scores</h1>
        <Link to='/'><button>X</button></Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            scores.map(score => {
              return (
                <tr key={score.id}>
                  <td>{rank++}</td>
                  <td>{score.name}</td>
                  <td>{score.highscore}</td>
                </tr>)
            })
          }
        </tbody>
      </table>
    </StyledHighscores>
  )
}
