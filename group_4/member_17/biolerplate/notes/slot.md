###react中的slot机制[Composition vs Inheritance]
```jsx
//vuejs
<div class="m-sidebar">
 <slot name="sidebar-ctn></slot>
</div>
```
这边slot
####react Slot
```jsx
    function FancyBox (props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
        </div>
    )
    }
```
