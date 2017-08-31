##Life Circle
###数据初始化理念  
Vue里面需要提前绑定 data，不然数据变动不会被监听到
而React是后期绑定数据到 state 上，数据变动也能被监听到


####1.componentDidMount
componentDidMount called after the component output has been rendered to the DOM.

####2.componentWillUnmount


###Called steps

```javascript   
React.DOM.render(<Clock />, document.getElementById('app'))
```
- call constructor of Clock component
- call componentDidMount when render  ctn output to
- call componentWillUnmount when component was teared done.
