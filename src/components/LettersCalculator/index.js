// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onEnterPhrase = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div>
          <h1 className="h1">Calculate the Letters you enter</h1>

          <label className="p1" htmlFor="inputs">
            Enter the phrase
          </label>
          <br />

          <input
            type="text"
            id="inputs"
            className="text"
            placeholder="Enter the phrase"
            onChange={this.onEnterPhrase}
          />

          <div className="letters-count">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            className="img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
