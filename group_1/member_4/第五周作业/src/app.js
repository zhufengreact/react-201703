/* 入口启动文件 */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux';

import store from './redux/Store';
import RootApp from './containers/RootApp';

import DevTool from './containers/DevTool';

let node;
if (__DEV__) {
    node = (
        <div>
            <DevTool />
            <RootApp />
        </div>
    );
}

if (__PROD__) {
    node = (
        <RootApp />
    );
}

render(<Provider store={store}>
    {node}
</Provider>, document.querySelector("#app"));