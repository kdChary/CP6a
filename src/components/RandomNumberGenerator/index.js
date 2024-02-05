import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  generateRandomNum = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({count: randomNum})
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-page">
        <div className="app-bg">
          <h1 className="title">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button"
            type="button"
            onClick={this.generateRandomNum}
          >
            Generate
          </button>
          <p className="count">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
