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

      </table>
    </div>
  )
}
