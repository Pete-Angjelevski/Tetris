import { useState, useCallback } from 'react'
import { STAGE_WIDTH } from '../gameHelpers'

import { TETROMINOS, randomTetromino } from '../tetrominos'

export function usePlayer () {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: TETROMINOS[0].shape,
    collided: false
  })

  function updatePlayerPos ({ x, y, collided }) {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided
    }))
  }

  const resetPlayer = useCallback(() => {
    setPlayer({
      pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
      tetromino: randomTetromino().shape,
      collided: false

    })
  }, [])

  return [player, updatePlayerPos, resetPlayer]
}
