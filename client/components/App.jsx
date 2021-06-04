import React, { useState } from 'react'
import { Route } from 'react-router-dom'

// Styles
import { StyledApp } from './styles/StyledApp'

// COMPONENTS
import Tetris from './Tetris'
import Instructions from './Instructions'
import Header from './Header'
import Highscores from './Highscores'

const App = () => {
  const [showInstructions, setShowInstructions] = useState(true)

  function toGame () {
    setShowInstructions(false)
  }

  return (
    <StyledApp>
      <Header />

      {showInstructions && <Instructions toGame={ toGame }/>}
      {!showInstructions && <Tetris />}
      <Route path="/highscores" component={Highscores}/>
    </StyledApp>
  )
}

export default App
