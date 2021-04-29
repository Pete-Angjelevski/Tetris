import React from 'react'

// STYLES
import { StyledStartButton } from './styles/StyledStartButton'

export default function StartButton ({ callback }) {
  return (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton >
  )
}
