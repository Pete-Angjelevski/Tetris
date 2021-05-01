import React, { useState } from 'react'

// Styles
import { StyledApp } from './styles/StyledApp'

// COMPONENTS
import Tetris from './Tetris'
import Instructions from './Instructions'
import Header from './Header'

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
    </StyledApp>
  )
}

export default App
