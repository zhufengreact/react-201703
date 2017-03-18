###jsx
1. jsx  语法定义dom结构，jsx 语法中用 {name}  传入变量值。
```jsx
const name = 'Demo'
<div className='demo'>
{name}
</div>


```
2. jsx 定义组件的时候，dom 顶级元素只能有一个

3. 等价于 React.CreateElement

4. 注释：
```jsx
{/*coments content*/}
```

5.
```jsx
class Demo extends Component {
  render () {
    return (
      <div className="demo">
        <h1>I am Demo</h1>
      </div>
    )
  }
}
```

6. render 函数的作用，是将虚拟dom的内容给渲染到dom里面
```jsx
class App extends Component {
  return <div>
    <h1>hello</h1>
    </div>
}
```
```jsx
class App extends Component {
  /*这边默认return null，会报错*/
  return null
    <div>
      <h1>hello</h1>
    </div>
}
```
建议格式：这样格式更为清晰
```jsx
class App extends Component {
  return (
    <div>
    <h1>hello</h1>
    </div>
  )
}

```
