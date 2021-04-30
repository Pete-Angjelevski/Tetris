import { useState } from 'react'

import { createStage } from '../gameHelpers'

export function useStage () {
  const [stage, setStage] = useState(createStage())

  return [stage, setStage]
}
