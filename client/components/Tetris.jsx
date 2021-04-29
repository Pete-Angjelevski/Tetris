import React from 'react'

// COMPONENTS
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

// HELPERS
import { createStage } from '../gameHelpers'

export default function Tetris () {
  return (
    <div>
      <Stage stage={createStage()}/>
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
