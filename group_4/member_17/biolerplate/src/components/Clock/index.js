import React, {Component} from 'React'

export default class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Clock',
      date: new Date().toLocaleTimeString()
    }
  }
  componentDidMount () {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(this.timerId)
    this.timerId = null
  }
  // synthetic event  according to W3C
  // https://facebook.github.io/react/docs/events.html
  sayAlert (e) {
    // console.log(this)
    // window.alert('do what')
    console.log(e.target)
  }

  tick () {
    // Thanks to the setState() call render again
    this.setState({
      date: new Date().toLocaleTimeString()
    })
    this.setState((prevState, props) => {
      // return  object
      let hi = 'Heloo'
      return {
        name: prevState.date + hi
      }
    })
    // // setState的第二种形式
    // this.setState((prevState， props) => {
        // return {}
    // })
  }

  render () {
    return (
      /*You have to be careful about the meaning of this in JSX callbacks. In JavaScript, class methods are not bound by default.*/
      <div className="m-clock" onClick={this.sayAlert.bind(this)}>
        <h3>{this.state.title}</h3>
        <p>{this.state.date}</p>
        <p>{this.state.name}</p>
      </div>
    )
  }
}

/*
  1. ReactDOM.render(<Clock />, el)
  调用 Clock 的 constructor
  2. render

  3. componentDidMount render content inserted in dom


  4. React may batch multiple setState() calls into a single update for performance.
*/