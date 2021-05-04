import React, { useState } from 'react'
import { addHighscoresApi } from '../API/highscoreAPI'

// STYLED
import { StyledDisplay } from './styles/StyledDisplay'

export default function GameOver ({ score }) {
  const [name, setName] = useState('')

  function handleChange (e) {
    setName(e.target.value)
  }

  function handleAdd () {
    const newScore = {
      name,
      highscore: score
    }
    addHighscoresApi(newScore)
  }

  return (
    <StyledDisplay >
      <h4>GAME OVER!</h4>
      <p>Final Score: {score}</p>
      <label> Add to Highscores?
        <input type="text" defaultValue="Name" onChange={(e) => handleChange(e)}/>
      </label>
      <button onClick={handleAdd}>Add</button>
    </StyledDisplay>

  )
}
