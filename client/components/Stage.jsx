import React from 'react'

// STYLES
import { StyledStage } from './styles/StyledStage'

// COMPONENTS
import Cell from './Cell'

export default function Stage ({ stage }) {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>

      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )
      }

    </StyledStage>
  )
}
