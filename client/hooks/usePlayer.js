import { useState, useCallback } from 'react'

import { randomTetromino } from '../tetrominos'

export function usePlayer () {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetromino().shape,
    collided: false
  })

  function updatePlayerPos ({ x, y, collided }) {
    setPlayer(prev => ({
      ...prev,
      pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
      collided
    }))
  }

  const resetPlayer = useCallback(() )
  

  return [player]
}
