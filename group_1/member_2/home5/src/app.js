/* 入口启动文件 */
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';

import store from "./redux/store";
import RootApp from './containers/RootApp';
import DevTools from './containers/DevTools';

let node;

if (__DEV__) {
  console.info('[当前环境] 开发环境')
    node = (
        <div>
          <DevTools/>
          <RootApp/>
        </div>
    )
}
if (__PROD__) {
  console.info('[当前环境] 生产环境')
    node = (
        <div>
          <RootApp/>
        </div>
    )
}
const root = document.getElementById('app')

render( <Provider store={store}>{node}</Provider>, root )
