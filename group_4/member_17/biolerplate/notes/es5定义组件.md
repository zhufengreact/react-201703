###es5定义组件
```javascript
var React = require('react')
var ReacDOM = require('react-dom')

// 有状态的组件
var App = React.createClass({
  render: function() {
    return <h1>Hello, react</h1>
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
```