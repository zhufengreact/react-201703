import React, {Component} from 'react'

import style from './index.less'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class BoilingVerdict extends Component {
  render() {
    let celsius = this.props.celsius

    if (celsius >= 100) {
      return <p>The water would boil.</p>
    } else {
      return <p>The water would not boil.</p>
    }
  }
}
/*In react, props are read only, can be solved by onTemperatureChange*/
class TemperatureInput extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this
      .handleChange
      .bind(this)

    this.state = {
      temperature: ''
    }
  }

  handleChange(e) {
    // this.setState({temperature: e.target.value});
    this
      .props
      .onTemperatureChange(e.target.value)
  }

  render() {
    // let temperature = this.state.temperature
    const scale = this.props.scale
    let temperature = this.props.temperature
    return (
      <p>
        <span className="tit">{scaleNames[scale]}:</span>
        <input
          type="text"
          className='u-input'
          value={temperature}
          onChange={this.handleChange}/>
      </p>
    )
  }
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class Calculator extends Component {
  constructor(props) {
    super(props)

    this.state = {
      temperature: '',
      scale: 'c'
    }
  }

  handleCelsiusChange(temperature) {
    this.setState((prevState, props) => {
      return {scale: 'c', temperature}
    })
  }

  handleFahrenheitChange(temperature) {
    this.setState((prevState, props) => {
      return {scale: '', temperature}
    })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale ==='c' ? tryConvert(temperature, toFahrenheit): temperature
    return (
      <div className="m-caculator">
        <TemperatureInput scale='c' onTemperatureChange={this.handleCelsiusChange.bind(this)}  temperature={celsius} />
        <TemperatureInput scale='f'onTemperatureChange={this.handleFahrenheitChange.bind(this)} temperature={fahrenheit} />
        <BoilingVerdict celsius={celsius} />
      </div>
    )
  }
}

export default Calculator

/*
  1.In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it;
  2.子类调用的实际上是父子组件的东西，去处理父子组件的数据，并没有直接更改props
  3. Top data down flow:单向据流
  4. 当数据(props, state)变化时，render函数将被再次调用
 */
