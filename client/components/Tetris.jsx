import React from 'react'

// COMPONENTS
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

export default function Tetris () {
  return (
    <div>
      <Stage />
      <aside>
        <div>
          <Display text="Score"/>
          <Display text="Rows"/>
          <Display text="Level"/>
        </div>
        <StartButton />
      </aside>
    </div>)
}
