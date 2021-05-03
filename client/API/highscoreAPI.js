import request from 'superagent'

export function getHighscoresApi () {
  return request.get('api/v1/highscores/')
    .then(res => {
      return res.body.scores
    })
    .catch(error => console.log(error))
}
