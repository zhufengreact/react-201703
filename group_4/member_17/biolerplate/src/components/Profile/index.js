import React, {Component} from 'React'

import  './index.less'
export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toLocaleTimeString()
    }
  }
  componentDidMount () {
    console.log('componentDidMount')
  }
  render () {
    let data = this.props
    return (
      <div className="m-profile">
        <img className="avatar" src={data.avatar}/>
        <h3 className="username">{data.username}</h3>
        <p className="brife-intro">ID: {data.id} {data.introTxt}</p>
        <p>Created at {this.state.date}</p>
      </div>
    )
  }
}

Profile.propTypes = {
  avatar: React.PropTypes.string,
  username: React.PropTypes.string,
  introTxt: React.PropTypes.string,
  id: React.PropTypes.number.isRequired
}

Profile.defaultProps = {
  avatar: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1489324481&di=27cb4895b6bea3742d6ea156251bc1b3&src=http://img0.pclady.com.cn/pclady/1210/07/886046_588628_18.jpg',
  username: 'Alice',
  id: 1,
  introTxt: '的profile'
}

// refenrence: https://facebook.github.io/react/docs/typechecking-with-proptypes.html