import request from 'superagent'

export function getScores () {
  return request.get('api/v1/highscores/')
    .then(res => {
      return res.body
    })
    .catch(err => console.error(err))
}
