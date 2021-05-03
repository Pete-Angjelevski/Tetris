import React, { useEffect, useState } from 'react'

import { getScores } from '../API/highscoreAPI'

export default function Highscores () {
  const [scores, setScores] = useState([])

  useEffect(() => {
    setScores(getScores())
  }, [])

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Score</th>
        </tr>
        {
          scores.map(score => {
            return (
              <tr key={score.id}>
                <td>{score.name}</td>
                <td>{score.highscore}</td>
              </tr>)
          })
        }
      </table>
    </div>
  )
}
