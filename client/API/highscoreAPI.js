import request from 'superagent'

export function getHighscoresApi () {
  return request.get('api/v1/highscores/')
}
