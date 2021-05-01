import React, { useState } from 'react'

// STYLES
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

// COMPONENTS
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

// HELPERS
import { createStage, checkCollision } from '../gameHelpers'

// CUSTOM HOOKS
import { usePlayer } from '../hooks/usePlayer'
import { useStage } from '../hooks/useStage'
import { useInterval } from '../hooks/useInterval'
import { useGameStatus } from '../hooks/useGameStatus'

export default function Tetris () {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()
  const [stage, setStage, rowsCleared] = useStage(player, resetPlayer)

  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared)

  console.log('re-render')

  function movePlayer (dir) {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 })
    }
  }

  function startGame () {
    setStage(createStage())
    setDropTime(1000)
    resetPlayer()
    setGameOver(false)
    setScore(0)
    setRows(0)
    setLevel(0)
  }

  function drop () {
    if (rows > (level + 1) * 10) {
      setLevel(prev => prev + 1)

      setDropTime(1000 / (level + 1) + 200)
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {
      if (player.pos.y < 1) {
        console.log('GAME OVER!!')
        setGameOver(true)
        setDropTime(null)
      }
      updatePlayerPos({ x: 0, y: 0, collided: true })
    }
  }

  function keyUp (e) {
    if (!gameOver) {
      if (e.keyCode === 40) {
        setDropTime(1000 / (level + 1) + 200)
      }
    }
  }

  function dropPlayer () {
    setDropTime(null)
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
      } else if (e.keyCode === 38) {
        playerRotate(stage, 1)
      }
    }
  }

  useInterval(() => {
    drop()
  }, dropTime)

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={e => keyUp(e)}>
      <StyledTetris>
        <Stage stage={stage}/>
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text='Game Over' />
          ) : (
            <div>
              <Display text={`Score: ${score}`}/>
              <Display text={`Rows: ${rows}`}/>
              <Display text={`Level: ${level}`}/>
            </div>
          )}
          <StartButton callback={startGame}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>)
}
