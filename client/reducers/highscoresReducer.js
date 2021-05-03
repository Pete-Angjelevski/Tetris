import { GET_ALL_HIGHSCORES } from '../actions/highscoresActions'

export default function highscores (state = [], action) {
  switch (action.type) {
    case GET_ALL_HIGHSCORES:
      return {
        ...state,
        parks: action.parks
      }
    default:
      return state
  }
}
