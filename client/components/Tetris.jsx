import React from 'react'

// STYLES
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris'

// COMPONENTS
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

// HELPERS
import { createStage } from '../gameHelpers'

export default function Tetris () {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()}/>
        <aside>
          <div>
            <Display text="Score"/>
            <Display text="Rows"/>
            <Display text="Level"/>
          </div>
          <StartButton />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>)
}
