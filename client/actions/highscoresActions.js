import { dispatch } from '../store'
import { getHighscoresApi } from '../API/highscoreAPI'

export const GET_ALL_HIGHSCORES = 'GET_ALL_HIGHSCORES'

export function getAllHighscores () {
  getHighscoresApi()
    .then(res => {
      const { scores } = res.body
      console.log('within action', scores)
      dispatch({
        type: GET_ALL_HIGHSCORES,
        scores
      })
      return null
    })
    .catch(err => console.error(err))
}
