export const STAGE_WIDTH = 12
export const STAGE_HEIGHT = 20

export function createStage () {
  return Array.from(Array(STAGE_HEIGHT),
    () => new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
}
