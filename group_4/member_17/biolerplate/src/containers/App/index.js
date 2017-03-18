import React, {Component} from 'react'
import Profile from 'Profile'

import  './index.less'
export default class App extends Component {
  render () {
    return (
       <div className="app">
      <Header />
      <Footer />
    </div>
    )
  }
}