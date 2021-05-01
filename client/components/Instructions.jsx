import React from 'react'

export default function Instructions ({ toGame }) {
  return (
    <div >
      <h1>Goal</h1>
      <p>You have to make full horizontal lines with the different shaped blocks that fall into the game area. Full lines will then disappear and provide points. The more lines you make at the same time, the more points you earn.</p>
      <h1>Score Calculation</h1>
      <p>1 line:	40 points</p>
      <p>2 lines:	100 points</p>
      <p>3 lines:	300 points</p>
      <p>4 lines:	1200 points</p>
      <p>Also, the faster you place a block, the more points you get.</p>

      <h1>Controls</h1>
      <p>Left arrow key:	move block to the left</p>
      <p>Right arrow key:	move block to the right</p>
      <p>Down arrow key:	move block down</p>
      <p>Up arrow key:	rotate block clockwise</p>
      <button onClick={toGame} >OK!</button>

    </div>
  )
}
