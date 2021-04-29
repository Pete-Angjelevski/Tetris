import React from 'react'

// COMPONENTS
import Cell from './Cell'

export default function Stage ({ stage }) {
  return (
    <div>
        {console.log(stage)}
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} />)
      )
      }

    </div>
  )
}
