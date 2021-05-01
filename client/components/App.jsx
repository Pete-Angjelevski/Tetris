import React, { useState } from 'react'

// COMPONENTS
import Tetris from './Tetris'
import Instructions from './Instructions'

const App = () => {
  const [showInstructions, setShowInstructions] = useState(true)

  function toGame () {
    setShowInstructions(false)
  }

  return (
    <>
      <h1>Pete's Tetris</h1>

      {showInstructions && <Instructions toGame={ toGame }/>}
      {!showInstructions && <Tetris />}
    </>
  )
}

export default App
