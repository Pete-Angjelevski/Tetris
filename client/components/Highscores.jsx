import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllHighscores } from '../actions/highscoresActions'

function Highscores ({ highscores }) {
  useEffect(() => {
    console.log('within component', highscores)
    getAllHighscores()
  }, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {
            highscores.map(score => {
              return (
                <tr key={score.id}>
                  <td>{score.name}</td>
                  <td>{score.highscore}</td>
                </tr>)
            })
          }
        </tbody>
      </table>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    highscores: state.highscores
  }
}

export default connect(mapStateToProps)(Highscores)
