import React, { useState } from 'react'

// STYLES
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

// COMPONENTS
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

// HELPERS
import { createStage } from '../gameHelpers'

// CUSTOM HOOKS
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'

export default function Tetris () {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPos, resetPlayer] = usePlayer()
  const [stage, setStage] = useStage(player)

  console.log('re-render')

  function movePlayer (dir) {
    updatePlayerPos({ x: dir, y: 0 })
  }

  function startGame () {
    setStage(createStage())
    resetPlayer()
  }

  function drop () {
    updatePlayerPos({ x: 0, y: 1, collided: false })
  }

  function dropPlayer () {
    drop()
  }

  function move (e) {
    e.preventDefault()

    if (!gameOver) {
      if (e.keyCode === 37) {
        movePlayer(-1)
      } else if (e.keyCode === 39) {
        movePlayer(1)
      } else if (e.keyCode === 40) {
        dropPlayer()
      }
    }
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage}/>
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text='Game Over' />
          ) : (
            <div>
              <Display text="Score"/>
              <Display text="Rows"/>
              <Display text="Level"/>
            </div>
          )}
          <StartButton callback={startGame}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>)
}
