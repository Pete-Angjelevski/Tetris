import React, { useEffect, useState } from 'react'

import { getHighscoresApi } from '../API/highscoreAPI'

export default function Highscores () {
  const [scores, setScores] = useState([])

  useEffect(() => {
    getHighscoresApi()
      .then(res => {
        setScores(res)
        return null
      })
      .catch(err => console.log(err))
  }, [scores])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            scores.map(score => {
              return (
                <tr key={score.id}>
                  <td>{score.name}</td>
                  <td>{score.highscore}</td>
                </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}
