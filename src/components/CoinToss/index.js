// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  // eslint-disable-next-line
  state = {isHead: true, count: 0, head: 0, tail: 0}

  onChange1 = () => {
    const result = Math.floor(Math.random() * 2)
    if (result === 0) {
      this.setState(prevState => ({
        isHead: true,
        count: prevState.count + 1,
        head: prevState.head + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        count: prevState.count + 1,
        tail: prevState.tail + 1,
      }))
    }
  }

  render() {
    const {count, isHead, head, tail} = this.state
    return (
      <div className="bgContainer">
        <div className="container1">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {isHead === true ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="img1"
              alt="one"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="img1"
              alt="two"
            />
          )}
          <br />
          <button className="btn1" type="button" onClick={this.onChange1}>
            Toss Coin
          </button>
          <div className="btn2">
            <p className="para1">Total:{count}</p>
            <p className="para1">Heads:{head}</p>
            <p className="para1">Tails:{tail}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
