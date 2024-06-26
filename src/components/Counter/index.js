import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {
    count: 0,
  }
  onIncrease = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
    })
  }
  onDecrease = () => {
    this.setState(prevState => ({count: prevState.count - 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrease}>
            Increase
          </button>
          <button className="button" type="button" onClick={this.onDecrease}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
